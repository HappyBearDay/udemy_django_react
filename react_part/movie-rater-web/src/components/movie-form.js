import React, { Component } from 'react';


class MovieForm extends Component {
    state = {
        editedMovie : this.props.editedMovie
    }

    cancelClicked = () => { this.props.cancelForm()}
    saveClicked = () => {console.log('save')}
    
    inputChanged = () => {
        console.log('changed')
        }
    


    render() {
        return (
            <React.Fragment>
                <span>Form</span>
                <p>title : <input    type='text' value={this.state.editedMovie.title}       onChange={this.inputChanged}/></p>
                <span>Description</span>
                <p>title : <textarea type='text' value={this.state.editedMovie.description} onChange={this.inputChanged}/></p>
                <button onClick={this.saveClicked}>Save</button><button onClick={this.cancelClicked}>Cancel</button>
            </React.Fragment>
            )
    }
}

export default MovieForm;
