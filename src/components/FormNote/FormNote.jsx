import React, { useState } from "react";
import { validateForm } from "../../utils";

const FormNote = (props) => {
  const { onAddNote } = props;

  const [input, setInput] = useState({
    title: "",
    body: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newNote = {
      ...input,
      id: +new Date(),
      createdAt: new Date().toString(),
      archived: false,
    };

    onAddNote(newNote);
    resetFormHandler();
  };

  const resetFormHandler = () => {
    setInput({
      title: "",
      body: "",
    });
  };

  const onInputChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (validateForm(value)) return;

    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={onSubmitHandler}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {50 - input.title.length}
        </p>
        <input
          type="text"
          name="title"
          value={input.title}
          className="note-input__title"
          onChange={onInputChangeHandler}
          placeholder="Ini adalah judul ..."
        />
        <textarea
          name="body"
          value={input.body}
          className="note-input__body"
          onChange={onInputChangeHandler}
          placeholder="Tuliskan catatanmu di sini ..."
        />
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};

export default FormNote;
