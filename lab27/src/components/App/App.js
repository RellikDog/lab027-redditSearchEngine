import React from 'react';
import Board from '../Item/Board'
import superAgent from 'superagent';
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.state.topics = [];
    this.state.search = {};
    this.state.search.subject = 'cats';
    this.state.search.limit = 3;
  }

  loadRedditBoards = async () => {
    const REDDIT_API = `https://www.reddit.com/r/${this.state.search.subject}.json?limit=${this.state.search.limit}`;
    return superAgent.get(REDDIT_API)
      .then(response => {
        console.log(response);
        this.setState({
          topics: response.data.children
        });
      })
      .catch(err => console.log(err));
  }

  render(){
    return(
      <main>
        <h1>helllo world!</h1>
        <form onSubmit={this.loadRedditBoards}>
          <button type='submit'>click</button>
        </form>
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