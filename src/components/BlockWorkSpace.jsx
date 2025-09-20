// BlockWorkSpace.jsx
"use client";
import React, { useContext, useEffect, useRef } from "react";
import * as Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
import { Context } from "../Context";
import '../Blocks';
import '../blocks/advenceBlock.css';
import CustomTheme from "../blocks/customBlockly";
import toolboxList from '../block.config';

export default function BlockWorkSpace() {
  const { characters, chosed, storeRef, workspaceRef } = useContext(Context);
  const character = characters.find((c) => c.id === chosed);
  const divRef = useRef(null);

  // Lưu trạng thái per-character ở runtime (không vật lý vào object context)
  // Map<characterId, { serialized?: Object, xml?: string, code?: string }>

  useEffect(() => {
    if (!divRef.current) return;

    // Inject workspace
    const workspace = Blockly.inject(divRef.current, {
      toolbox: toolboxList,
      theme: CustomTheme,
      collapse: true,
      comments: true,
      disable: true,
      maxBlocks: Infinity,
      trashcan: false,
      horizontalLayout: false,
      toolboxPosition: 'start',
      css: true,
      media: 'blockly/media',
      rtl: false,
      scrollbars: true,
      sounds: true,
      oneBasedIndex: true,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 2,
        minScale: 0.5,
        scaleSpeed: 1.2
      },
      grid: {
        spacing: 30,
        length: 20,
        colour: '#ccc',
        snap: true
      }
    });

    workspaceRef.current = workspace;

    // ---- Restore logic (prefer serialization, fallback to XML) ----
    (function restore() {
      const saved = storeRef.current.get(chosed);

      try {
        // 1) Preferred: serialization API
        if (saved?.serialized && Blockly.serialization && Blockly.serialization.workspaces && typeof Blockly.serialization.workspaces.load === "function") {
          Blockly.serialization.workspaces.load(saved.serialized, workspace);
          return;
        }

        // 2) Fallback: if we have xml string in store
        const xmlString = saved?.xml || character?.xml; // allow legacy character.xml
        if (xmlString) {
          // textToDom may live in Blockly.utils.xml or Blockly.Xml
          const textToDom = Blockly.utils?.xml?.textToDom || Blockly.Xml?.textToDom;
          // clearWorkspaceAndLoadFromXml or appendDomToWorkspace are possible loaders
          const loader =
            Blockly.Xml?.clearWorkspaceAndLoadFromXml ||
            Blockly.Xml?.appendDomToWorkspace ||
            Blockly.Xml?.domToWorkspace;

          if (typeof textToDom === "function" && typeof loader === "function") {
            const dom = textToDom(xmlString);
            // different loader signatures in different builds: most accept (dom, workspace)
            loader(dom, workspace);
            return;
          } else {
            console.warn("Blockly XML helper not available for restore.");
          }
        }

        // else: nothing to restore (fresh workspace)
      } catch (err) {
        console.warn("Failed to restore workspace for", chosed, err);
      }
    })();

    // ---- Change listener: update codeRef (if exists) and save snapshot ----
    const onChange = () => {
      try {
        const code = javascriptGenerator.workspaceToCode(workspace);
        up(character,code)
        Save(storeRef,chosed,code,workspace);
      } catch (err) {
        console.warn("onChange error:", err);
      }
    };
    workspace.addChangeListener(onChange);

    // ---- Cleanup on unmount or when chosed changes ----
    return () => {
      try {
        const code = javascriptGenerator.workspaceToCode(workspace);
        Save(storeRef,chosed,code,workspace);
        up(character,code)
      } catch (e) {
        console.warn("final save failed:", e);
      }

      try {
        // disposing workspace removes listeners; safe to call
        workspace.dispose();
      } catch (e) {
        console.warn("workspace.dispose failed:", e);
      }
      workspaceRef.current = null;
    };
  }, [chosed]); // re-run only when chosen character changes

  return (
    <div className="flex-1 w-full">
      <div
        ref={divRef}
        className="min-h-[500px] md:h-[600px] lg:h-[700px] w-full rounded-2xl bg-white/80 shadow-lg backdrop-blur-md p-2"
      />
    </div>
  );
}
const Save = (storeRef,chosed,code,workspace) => {
      let serialized;
      if (Blockly.serialization && Blockly.serialization.workspaces && typeof Blockly.serialization.workspaces.save === "function") {
        try {
          serialized = Blockly.serialization.workspaces.save(workspace);
        } catch (e) {
          serialized = undefined;
        }
      }

      let xmlText;
      if (Blockly.Xml?.workspaceToDom && Blockly.Xml?.domToText) {
        try {
          const dom = Blockly.Xml.workspaceToDom(workspace);
          xmlText = Blockly.Xml.domToText(dom);
        } catch (e) {
          xmlText = undefined;
        }
      }
   storeRef.current.set(chosed, { serialized, xml: xmlText, code });
}
const up = (character,code) => {
  if (character?.codeRef && typeof character.codeRef === "object" && "current" in character.codeRef) {
          try {
            character.codeRef.current = code;
          } catch (e) {console.warn("onChange error:", err)}
        }
}