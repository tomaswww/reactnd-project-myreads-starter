import React, { Component } from 'react'

class ShelfChanger extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {value: props.shelf};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('New shelf is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
            <div className="book">
                <div className="book-shelf-changer">
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                </div>
              </div>
    )
  }
};
                   

export default ShelfChanger