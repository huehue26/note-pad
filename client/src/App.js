import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  const [addNoteVisiblity, setAddNoteVisiblity] = useState(false);
  const [allNotes, setAllNotes] = useState();

  const loadNotes = async () => {
    const response = await axios.get("http://localhost:5000/note/get-note");
    if (response.data) setAllNotes(response.data.data);
  };
  useEffect(() => {
    loadNotes();
  }, [addNoteVisiblity, allNotes]);
  return (
    <div className="container max-w-7xl mx-auto mt-8">
      <div className="mb-4">
        <h1 className="flex justify-center items-center font-serif text-3xl">
          Make yourself organised using Note Pad
        </h1>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 rounded-md bg-zinc-700 text-white hover:bg-zinc-900"
            onClick={() => {
              setAddNoteVisiblity(!addNoteVisiblity);
            }}
          >
            Add Note
          </button>
        </div>
      </div>
      {addNoteVisiblity ? (
        <CreateNote setAddNoteVisiblity={setAddNoteVisiblity} />
      ) : (
        ""
      )}
      <div className="flex flex-col justify-center items-center mt-10">
        {allNotes
          ? allNotes.map((note) => {
              return <Note {...note} key={note.id} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default App;
