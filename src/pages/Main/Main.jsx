import React, { useState } from "react";
import { getInitialData } from "../../utils";

import {
  FormNote,
  NoteList,
  EmptyState,
} from "../../components";

const Main = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [search, setSearch] = useState("");

  const isNotesEmpty = notes.length === 0;
  const isArchivedNotesEmpty = notes.filter((note) => note.archived).length === 0;

  const onAddNoteHandler = (note) => {
    setNotes([...notes, note])
  };

  const onDeleteHandler = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  };

  const onArchiveHandler = (id) => {
    const foundNoteIndex = notes.findIndex((note) => note.id === id);

    if (foundNoteIndex > -1) {
      const updateNotes = [...notes];
      updateNotes[foundNoteIndex].archived = !updateNotes[foundNoteIndex].archived;
      setNotes(updateNotes);
    }
  };

  const onSearchHandler = (event) => {
    setSearch(event.target.value)
  };

  const getFilteredNotesHandler = () => {
    return notes.filter(
      (note) => !note.archived && note.title.toLowerCase().includes(search)
    );
  };

  const getArchivedNotesHandler = () => {
    return notes.filter((note) => note.archived)
  };

  return (
    <React.Fragment>
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan ..."
            value={search}
            onChange={onSearchHandler}
          />
        </div>
      </div>
      <div className="note-app__body">
        <FormNote onAddNote={onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        {isNotesEmpty ? (
          <EmptyState />
        ) : (
          <NoteList
            notes={getFilteredNotesHandler()}
            onDelete={onDeleteHandler}
            onArchive={onArchiveHandler}
          />
        )}
        <h2>Arsip</h2>
        {isArchivedNotesEmpty ? (
          <EmptyState />
        ) : (
          <NoteList
            notes={getArchivedNotesHandler()}
            onDelete={onDeleteHandler}
            onArchive={onArchiveHandler}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Main;
