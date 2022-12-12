import React, { useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

function Note(note) {
  const [visiblity, setVisiblity] = useState(true);
  const deleteNote = async () => {
    const response = await axios.post(
      "http://ec2-52-15-73-37.us-east-2.compute.amazonaws.com:5000/note/delete-note",
      {
        id: note.id,
      }
    );
    if (!response.data.success) {
      setVisiblity(true);
    }
  };
  return (
    <div className="w-full">
      {visiblity ? (
        <div className="border-b border-gray-200">
          <div className="flex flex-row w-full justify-between items-center px-6 py-4">
            <div className="text-lg font-bold leading-5 text-gray-900">
              {note.heading}
            </div>
            <div
              className="text-sm font-medium text-red-500 cursor-pointer hover:text-red-600"
              onClick={() => {
                deleteNote();
                setVisiblity(false);
              }}
            >
              <MdDelete size={30} />
            </div>
          </div>
          <div className="px-6 py-4 flex flex-row justify-start items-center">
            <p>{note.note}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Note;
