import React, { Component } from 'react';


class MovieForm extends Component {

    constructor(props) {
        super(props);
        let movie = Object.assign({}, props.movie);
        this.state = {editedMovie : movie}
    }
    

    cancelClicked = () => { this.props.cancelForm()}
    
    saveClicked = () => {
        fetch(`http://127.0.0.1:8000/api/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token 057a1ee54639790b27251dc92f86bffecc31cec4`
            },
            body: JSON.stringify(this.state.editedMovie)
            }).then( resp => resp.json())
            .then( res => this.props.addMovie(res))
            .catch( error => console.log(error))
    }
    
    
    updateClicked = () => {
        console.log(this.state.editedMovie)
        console.log('update')
        fetch(`http://127.0.0.1:8000/api/movies/${this.state.editedMovie.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token 057a1ee54639790b27251dc92f86bffecc31cec4`
            },
            body: JSON.stringify(this.state.editedMovie)
            }).then( resp => resp.json())
            .then( res => this.props.editedMovie(res))
            .catch( error => console.log(error))
    }


    inputChanged = event => {
        let movie = this.state.editedMovie;
        movie[event.target.name] = event.target.value;
        this.setState({editedMovie: movie});
    }

    render() {
        const isDisabled = this.state.editedMovie.title.length === 0 || 
                            this.state.editedMovie.description.length === 0;
        return (
            <React.Fragment>
                <span>Form</span>
                <p>title : <input name='title' type='text' value={this.state.editedMovie.title}
                    onChange={this.inputChanged}/></p>
                <span>Description</span>
                <p>title : <textarea name='description' type='text' value={this.state.editedMovie.description} 
                    onChange={this.inputChanged}/></p>
                {this.state.editedMovie.id ? 
                    <button disabled={isDisabled} onClick={this.updateClicked}>update</button> : 
                    <button disabled={isDisabled} onClick={this.saveClicked}>Save</button>
                }
                &nbsp;<button onClick={this.cancelClicked}>Cancel</button>
            </React.Fragment>
            )
    }
}

export default MovieForm;
