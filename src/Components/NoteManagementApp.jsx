//بسم الله الرحمان الرحیم
import React, { useState, useEffect } from "react";
import Note from "./Note";
import SearchBar from "./SearchBar";

function NoteManagementApp() {
  const [notes, setNotes] = useState([
    {value: "", color: "lightpink"}
  ])

  const addNote = (event) =>{
    const selectedColor = getComputedStyle(event.target).backgroundColor;

    let newNote = {
      value: "",
      color: selectedColor
    }
    
    setNotes(n =>[...n, newNote])
  }

  const handleNoteChange = (index, newValue) => {
    const updatedNotes = notes.map(function(note, i) {
      if (i === index) {
        note.value = newValue
      }
      
      return note
    })
    
    setNotes(updatedNotes); // Update the specific note's value
  }

  const handleDeleteButton = (index) => {
    const updatedNotes = notes.filter((element, i) => i !== index)
    setNotes(updatedNotes)
  }  

  return (
    <>
      <div className="app-container">
        <div className="app-display">
          <div className="side-bar">
            <button className="add-note-button">+</button>
            <div className="color-options">
              <ul>
                <div>
                  <button onClick={addNote} className="color-button color1"></button>
                </div>
                <div>
                  <button onClick={addNote} className="color-button color2" ></button>
                </div>
                <div>
                  <button onClick={addNote} className="color-button color3" ></button>
                </div>
                <div>
                  <button onClick={addNote} className="color-button color4" ></button>
                </div>
                <div>
                  <button onClick={addNote} className="color-button color5" ></button>
                </div>
                <div>
                  <button onClick={addNote} className="color-button color6" ></button>
                </div>
              </ul>
            </div>
          </div>
          <div className="search-bar">
            <SearchBar />
          </div>
          <div className="note-section">
            <div>
              <h1 className="note-section-header">Notes</h1>
            </div>
            
            <div className="note-box-display">
              {notes.map((note, index) => (
                <Note
                  key={index}
                  value={note.value}
                  onChange={(e) => handleNoteChange(index, e.target.value)}
                  onClick={(e) => handleDeleteButton(index)}
                  color={note.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteManagementApp;