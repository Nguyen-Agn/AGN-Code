"use client";
import React, { useContext, useEffect, useRef } from "react";
import * as Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript"; //
import { Context } from "../Context";
import '../Blocks';
import '../blocks/advenceBlock.css';
import CustomTheme from "../blocks/customBlockly";
import toolboxList from '../block.config'

export default function BlockWorkSpace() {
  const {characters, chosed} = useContext(Context);
  const character = characters.find((c)=> c.id === chosed)
  const divRef = useRef(null);
  const workspaceRef = useRef(null);

  useEffect(() => {
    if (!divRef.current) return;
    const toolbox = toolboxList;
    workspaceRef.current = Blockly.inject(divRef.current, {
      toolbox: toolbox,
      theme: CustomTheme,
      collapse: true,
      comments: true,
      disable: true,
      maxBlocks: Infinity,
      trashcan: true,
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

    workspaceRef.current.addChangeListener(() => {
      // dùng trực tiếp javascriptGenerator
      const code = javascriptGenerator.workspaceToCode(workspaceRef.current);
      character.codeRef.current = code;
    });

    return () => {if (workspaceRef.current) workspaceRef.current.dispose()};
  }, [character]);

  return (
    <div className="flex-1 w-full">
      <div
        ref={divRef}
        className="min-h-[500px] md:h-[600px] lg:h-[700px] w-full rounded-2xl bg-white/80 shadow-lg backdrop-blur-md p-2"
      />
    </div>
  );
}