import React, { useContext } from "react";
import { Context } from "../Context";
import { saveSnapshotsToFile, loadSnapshotsFromFile } from "../code.workspace";
import { Import, Save } from "lucide-react";

export default function Toolbar() {
  const { storeRef,characters, setCharacters, setChosed } = useContext(Context);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => saveSnapshotsToFile(storeRef, characters)}
        className="button"
      >
        <Save/>
      </button>

       <label
        htmlFor="load-json"
        className="button flex items-center"
        title="Load JSON"
      >
        <Import/>
        <input
          id="load-json"
          type="file"
          accept="application/json"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              loadSnapshotsFromFile(file, storeRef, setCharacters, setChosed);
            }
          }}
        />
      </label>
    </div>
  );
}
