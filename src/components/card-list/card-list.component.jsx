import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card-component';

export const CardList = props => (
    <div className="card-list">
      {props.players.map(x => (
        <Card key={x.id} player={x}/>
      ))}
    </div>
  );