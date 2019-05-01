import React from 'react';

export default class Board extends React.Component{
  render(){
    const {board} = this.props;

    return(<p>{board.data.title}</p>);
  }
}