import React from 'react';
import Todo from './todo';

export default class TodoList extends React.Component {
  componentDidMount() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
    });
  }
  render() {
    let data = this.props.data;
    let todoNodes = data.map(function(todo) {
      return (
          <Todo title={todo.title} key={todo.created}>
            {todo.descripiton}
          </Todo>
      );
    });
    return (
      <ul className="collapsible" data-collapsible="accordion">
          {todoNodes}
      </ul>

    )
  }
}
