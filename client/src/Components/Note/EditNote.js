import React, { Component } from 'react';
import './EditNote.css';

export default class NoteEdit extends Component {
  render() {
    return (
      <div className="EditNote">
        {/* <form onSubmit={this.props.submitChecker} className="Edit-Note__Form">
          <div className="Form__Top">
            <textarea
              input="text"
              className="Top__Text-Create"
              rows="5"
              placeholder={
                username + ', what are your thoughts about this place?'
              }
              maxLength="250"
              onChange={this.props.onChangeNote}
              value={this.props.editnote}
            />
          </div>
          <div className="Form__Bottom">
            <button type="submit">Submit</button>
            <div
              className="Edit-Note__Messagebox"
              style={{ color: this.props.messageboxcolor }}
            >
              {this.props.messagebox}
            </div>
          </div>
        </form> */}
      </div>
    );
  }
}
