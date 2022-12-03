import React from "react";
import NoteItem from "../NoteItem";

const NoteList = (props) => {
  const { notes, onDelete, onArchive } = props;
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          note={note}
          key={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
};

export default NoteList;
