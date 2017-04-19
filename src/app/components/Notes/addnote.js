import React from 'react';
import {InputText} from 'primereact';
import {Button} from 'primereact';

class AddNote extends React.Component {
  handleSubmit(){
    var newNote = this.note;
    this.note= '';
    this.props.addNote(newNote)
  }
  setNote(note){
    this.note = note;
  }
  render(){
    return (
      <div className="input-group">
        <InputText type="text"  placeholder="Add New Note" onChange={(e) => this.setNote(e.target.value)}/>
        <Button type="button" onClick={() => this.handleSubmit()} label="Submit" style={{ marginLeft: '10px'}}/>
      </div>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default AddNote