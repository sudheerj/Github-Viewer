import React from 'react';
import NotesList from './noteslist';
import AddNote from './addnote';

const Notes = ({username, notes, addNote}) => {
  return (
    <div>
      <h3> Notes for {username} </h3>
      <AddNote username={username} addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  )
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired,
}

export default Notes;