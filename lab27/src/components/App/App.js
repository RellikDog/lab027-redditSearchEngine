import React from 'react';
import BoardForm from '../Form/boardForm';
import Board from '../Item/Board';
import superAgent from 'superagent';
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.state.topics = [];
    this.state.subject = 'cats';
    this.state.limit = 3;
  }
  //1moce searct to forms state
  //tie form to states
  //poass load as [props
  loadRedditBoards = (param1, param2) => {
    const REDDIT_API = `https://www.reddit.com/r/${param1}.json?limit=${param2}`;
    return superAgent.get(REDDIT_API)
      .then(response => {
        console.log(response);
        this.setState({
          topics: response.body.data.children
        });
      })
      .catch(err => console.log(err));
  };

  testFunc = () => {
    this.loadRedditBoards(this.state.subject, this.state.limit);
  }
  // updateSearch = (e) => {
  //   this.setState({
  //     search.subject: event.boardSubject,
  //     search.limit: event.boardLimit
  //    });
  // };

  render(){
    return(
      <main>
        <h1>Look For Reddit Boards</h1>
        <BoardForm
          loadRedditBoards={this.loadRedditBoards}
        />
        <button onClick={this.testFunc}>test</button>
        <ul>
          {
            this.state.topics.map(currentBoard =>
                <Board
                  board={currentBoard}
                />
            )
          }
        </ul>
      </main>
    );
  }
}