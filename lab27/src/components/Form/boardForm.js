import React from 'react';

export default class BoardForm extends React.Component{

  constructor(props){
    super(props);
    this.state ={};
    this.state.subject = 'dogs';
    this.state.limit = 1;
  }

  handleSubjectChange = event => {
    this.setState({subject: event.target.value});
  };
  handleLimitChange = event => {
    this.setState({limit: event.target.value});
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.loadRedditBoards(this.state.subject, this.state.limit);
  };

  render(){
    return(
      <fieldset>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSubjectChange} type="text" name="boardSubject" value={this.state.subject}/>
            <input onChange={this.handleLimitChange} type="number" name="boardLimit" value={this.state.limit}/>
              <input type="submit" value="look up boards"/>
        </form>
      </fieldset>
    )
  }
}