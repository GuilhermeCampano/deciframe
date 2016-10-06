import React from 'react';
export default class TodoForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     title:'',
     descripiton:''
   }
  }
  handleTitleChange = (e) => {
   this.setState({title: e.target.value});
  }
  handleDescripitonChange = (e) => {
   this.setState({descripiton: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var title = this.state.title.trim();
    var descripiton = this.state.descripiton.trim();
    if (!descripiton || !title) {
      return;
    }
    this.props.onTodoSubmit({title: title, descripiton: descripiton});
    this.setState({title: '', descripiton: ''});
  }
  render() {
    return (
      <form className="col s12" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s5">
            <input type="text"
              id="todo-title"
              onChange={this.handleTitleChange}
              value={this.state.title}
            />
          <label htmlFor="todo-title">Título</label>
          </div>
          <div className="input-field col s5">
            <input type="text"
              id="todo-descripiton"
              onChange={this.handleDescripitonChange}
              value={this.state.descripiton}
            />
          <label htmlFor="todo-descripiton">Descrição</label>
          </div>
          <div className="input-field col s2">
            <input type="submit" className="waves-effect waves-light btn" value="Adicionar"/>
          </div>
        </div>

      </form>
    )
  }
}
