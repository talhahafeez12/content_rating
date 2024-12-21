
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        handleLike:() => {
            this.setState((prevState) => ({
                likes: prevState.likes + 1
            }));
        },
        handleDislike:() => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1
            }));
        }
    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
        Are you curious about the lucrative field that is software engineering and how you might be a part of it? This is the course for you! By taking this course you will gain foundational knowledge of software development, programming, and the many exciting job roles and career paths that the IT industry offers. 
        </p>
        <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
            </button>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
