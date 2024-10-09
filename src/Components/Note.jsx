import React from "react";
// import Props from 'prop-types'
import NoteManagementApp from "./NoteManagementApp";

const Note = ({ value, onChange, color}) => {

  // const backgroundColor = props.color;
  return (
    <div id="noteBox" className="note-box" style={{ backgroundColor: color}}>
      <button className="delete-button"></button>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Type your note here..."
        className="note-input"
        maxLength={250}
        style={{ backgroundColor: color}}
        id="noteInput"
      />
    </div>
  );
};

export default Note;