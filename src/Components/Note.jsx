import React from "react";
// import { FontAwesomeIcon } from 'react-fontawesome';
{/* <FontAwesomeIcon icon="fa-solid fa-trash"></FontAwesomeIcon> */}
// import Props from 'prop-types'
import NoteManagementApp from "./NoteManagementApp";

const Note = ({ value, onClick, onChange, color}) => {

  // const backgroundColor = props.color;
  return (
    <div id="noteBox" className="note-box" style={{ backgroundColor: color}}>
      <button onClick={onClick} className="delete-button">x</button>
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