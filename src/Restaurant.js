import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const { name, votes, handleSelect, handleDeselect, user } = this.props
    const userHasSelected = votes && Object.keys(votes).includes(user.uid)
    const totalVotes = map(votes, (vote) => vote).length
    return (
      <article className="Restaurant">
        <h3>{ name }</h3>
        <ul>
          <li>
            votes: {totalVotes}
          </li>  
          { votes && map(votes, (vote, key) => 
            <li  key={key}>{ vote }</li>
          )}
        </ul>
        {
          userHasSelected 
          ?    
          <button className="destructive" onClick={ handleDeselect }>
            Nah, nevermind
          </button>
          :
          <button onClick={ handleSelect }>
            yea, i'd go there
          </button>
        }
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
