import React from "react";
import { showFormattedDate } from "../../utils";

const NoteItem = (props) => {
  const { note, onDelete, onArchive } = props;

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        <button
          onClick={() => onDelete(note.id)}
          className="note-item__delete-button"
        >
          Delete
        </button>
        <button
          onClick={() => onArchive(note.id)}
          className="note-item__archive-button"
        >
          Arsip
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
