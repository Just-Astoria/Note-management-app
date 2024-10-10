import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import NoteManagementApp from "./NoteManagementApp";

const Note = ({ value, onClick, onChange, color}) => {

  // const backgroundColor = props.color;
  return (
    <div id="noteBox" className="note-box" style={{ backgroundColor: color}}>
      <button onClick={onClick} className="delete-button"><FontAwesomeIcon className="trash-icon" icon={faTrash} /></button>
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