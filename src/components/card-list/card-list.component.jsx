import React from 'react';
import './card-list.styles.css';

export const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.players.map(x => <h1 key={x.id}>{x.name}</h1>)}
    </div>
  )
}