// utils/storageUtils.js
import React from "react";
import * as Blockly from "blockly";
import { toast } from "sonner";

export function saveSnapshotsToFile(storeRef, characters) {
  const entries = Array.from(storeRef.current.entries()).map(([k, v]) => [String(k), v]);
  const workspaces = Object.fromEntries(entries);
  const data = {
    characters: (characters || []).map(c => ({
      id: c.id, name: c.name, color: c.color, x: c.x, y: c.y, direction: c.direction
    })),
    workspaces
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "workspaces.json";
  a.click();
  URL.revokeObjectURL(url);
}

export function loadSnapshotsFromFile(
  file,
  storeRef,
  setCharacters,
  setChosed
) {
  setChosed(-1)
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const json = JSON.parse(e.target.result);

      const workspacesObj = json.workspaces || {};
      const entries = Object.entries(workspacesObj).map(([k, v]) => {
        const maybeNum = Number(k);
        const key =
          String(k).trim() !== "" && !Number.isNaN(maybeNum) ? maybeNum : k;
        return [key, v];
      });
      const workspacesMap = new Map(entries);

      // Tạo lại characters với codeRef gắn code đã lưu
      const fileChars = (json.characters || []).map((ch) => {
        const idKey = !Number.isNaN(Number(ch.id)) ? Number(ch.id) : ch.id;
        const saved = workspacesMap.get(idKey) || {};
        const codeRef = React.createRef();
        codeRef.current = saved.code || "";
        return { ...ch, codeRef };
      });

      setCharacters(fileChars);

      const newChosed = fileChars[0]?.id ?? 0;
      setChosed(newChosed);

      storeRef.current = workspacesMap;

      toast.success("Loaded workspace snapshot");
    } catch (err) {
      toast.error("Error parsing file");
      console.error(err);
    }
  };

  reader.onerror = (err) => {
    toast.error("Failed to read file");
    console.error(err);
  };

  reader.readAsText(file);
}