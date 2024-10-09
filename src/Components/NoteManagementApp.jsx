//بسم الله الرحمان الرحیم
import React, { useState, useEffect } from "react";
import Note from "./Note";

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


  // Log the color whenever it changes
  // useEffect(() => {
  //   console.log(color)
  //   document.getElementById("noteBox").style.backgroundColor = color;
  //   document.getElementById("noteInput").style.backgroundColor = color;
  // },[addNote]);

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
              </ul>
            </div>
          </div>
          <div className="search-bar">Search Bar</div>
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