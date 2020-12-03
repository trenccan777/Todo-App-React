import React from "react";

export default class Todo extends React.Component {



    onChangeHandler() {
        console.log('test')
    }

  render() {

    return (
      <li>
        <p>{this.props.data.todo}</p>
        <input type='checkbox' checked={this.props.data.completed} onChange ={this.onChangeHandler}/>
      </li>
    );
  }
}
