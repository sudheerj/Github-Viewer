import React from 'react';
import {InputText} from 'primereact';
import {Button} from 'primereact';

class SearchGithub extends React.Component {
  setUsername(name){
    this.usernameRef = name;
  }
  handleSubmit(){
    const username = this.usernameRef;
    this.usernameRef = '';
    this.props.history.pushState(null, "/profile/" + username)
  }
  render(){
    return (
    <div className="col-sm-12">
      <form>
        <div className="form-group col-sm-7">
          <InputText onChange={(e) => this.setUsername(e.target.value)}/>
        </div>
        <div className="form-group col-sm-5">
          <Button  label="Search Github" onClick={this.handleSubmit.bind(this)}/>
        </div>
      </form>
    </div>

    )
  }
}

SearchGithub.PropTypes = {
  history: React.PropTypes.object.isRequired
}

export default SearchGithub;