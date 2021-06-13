import React, { Component } from 'react'
import './App.css'

class ShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.shelf, title:props.title};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  moveBook(event) {
    console.log(event.target.value,this.state.title)
    this.props.moveBook(event.target.value,this.state.title)
  }
  


  render() {
    return (
            <div className="book">
                <div className="book-shelf-changer">
                      <select value={this.state.value} onChange={e => {this.handleChange(e); this.moveBook(e)}}>
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