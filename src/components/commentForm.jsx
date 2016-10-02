import React from 'react';
export default class CommentForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     title:'',
     producer:''
   }
   this.handleClick = this.handleClick.bind(this);
   this.handleTitleChange = this.handleTitleChange.bind(this);
   this.handleProducerChange = this.handleProducerChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(e) {
   this.setState({title: e.target.value});
  }
  handleProducerChange(e) {
   this.setState({producer: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var producer = this.state.producer.trim();
    if (!producer || !title) {
      return;
    }
    this.props.onCommentSubmit({title: title, producer: producer});
    this.setState({title: '', producer: ''});
  }
  handleClick() {
   console.log(this); // React Component instance
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        {this.state.title} | {this.state.producer}
        <br/>
        <input type="text"
          placeholder="title"
          onChange={this.handleTitleChange}
          value={this.state.title}
        />
        <input type="text"
          placeholder="producer"
          onChange={this.handleProducerChange}
          value={this.state.producer}
        />
        <input type="submit" value="Post" />
      </form>
    )
  }
}
