import React, { Component } from 'react';


var FontAwesome = require('react-fontawesome')

class MovieDetails extends Component {

    state = {
        highlighted: -1 
    }
    
    rateClicked = (stars) =>{
        console.log(stars)

        fetch(`http://127.0.0.1:8000/api/movies/${this.props.selectedMovie.id}/rate_movie/`, {
            method: 'POST',
            'headers': {
                'Content-Type' : 'application/json',
                'Authorization': 'Token  057a1ee54639790b27251dc92f86bffecc31cec4'
            },
            body : JSON.stringify({stars : stars+1})
        }).then( resp => resp.json())
        .then( res => console.log(res) )
        .catch( error=> console.log(error))

    }


    highlightRate = (high) =>{
        this.setState({highlighted : high})
    }

    render() {
        return (
            <React.Fragment>
        {this.props.selectedMovie ? (
        <div>
            <h3>{this.props.selectedMovie.title}</h3>
            <FontAwesome name='star' className={this.props.selectedMovie.stats_of_ratings.stars__avg > 0 ? 'orange' : ''}></FontAwesome>
            <FontAwesome name='star' className={this.props.selectedMovie.stats_of_ratings.stars__avg > 1 ? 'orange' : ''}></FontAwesome>
            <FontAwesome name='star' className={this.props.selectedMovie.stats_of_ratings.stars__avg > 2 ? 'orange' : ''}></FontAwesome>
            <FontAwesome name='star' className={this.props.selectedMovie.stats_of_ratings.stars__avg > 3 ? 'orange' : ''}></FontAwesome>
            <FontAwesome name='star' className={this.props.selectedMovie.stats_of_ratings.stars__avg > 4 ? 'orange' : ''}></FontAwesome>
            ({this.props.selectedMovie.stats_of_ratings.stars__count})
            <p>{this.props.selectedMovie.description}</p>

            <div className='rate-container'>
                <h2>Rate !!!</h2>
                {
                    [...Array(5)].map( (e, i) => {
                        return <FontAwesome name='star' key={i} className={this.state.highlighted > i - 1 ? 'purple' : ''} 
                        onMouseEnter={() => (this.highlightRate(i))}
                        onMouseLeave={() => (this.highlightRate(-1))}
                             onClick={() => (this.rateClicked(i))}/>
                    }

                    )
                }
            </div>

        </div>
        ) : null }
            </React.Fragment>
            )
        
    }
}

export default MovieDetails;
