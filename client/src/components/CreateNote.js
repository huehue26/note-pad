import React, { useState } from "react";
import axios from "axios";

function CreateNode({ setAddNoteVisiblity }) {
  const [noteHeading, setNoteHeading] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const addNote = async () => {
    const response = await axios.post("http://localhost:5000/note/add-note", {
      heading: noteHeading,
      note: noteContent,
    });
  };
  return (
    <div className="ml-20 w-10/12">
      <div>
        <div className="pl-1 text-lg pb-1">Heading</div>
        <div>
          <input
            type="text"
            className="border-b border-gray-400 w-full focus:outline-none pl-1 pb-1"
            onChange={(e) => {
              setNoteHeading(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <div className="pl-1 mt-3 text-lg pb-1">Note</div>
        <div>
          <input
            type="text"
            className="border-b border-gray-400 w-full focus:outline-none pl-1 pb-1"
            onChange={(e) => {
              setNoteContent(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-end justify-end items-center mt-4">
        <button
          className="px-10 py-2 rounded-md bg-zinc-700 text-white hover:bg-zinc-900"
          onClick={() => {
            addNote();
            setAddNoteVisiblity(false);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CreateNode;
