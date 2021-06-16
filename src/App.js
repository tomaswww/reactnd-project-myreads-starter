import React from 'react'
import Book from './Book'
import Shelf from './Shelf'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import './App.css'

class BooksApp extends React.Component {
  state = {
    categories: [
      {shelf:"currentlyReading"},
      {shelf:"wantToRead"},
      {shelf:"read"}
    ],
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
      
  }

  refresh = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
      
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={()=> (
          <BookSearch refresh={this.refresh} />
        )} />
        <Route exact path='/' render={()=> (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {this.state.categories.map(cat =>
                    <Shelf shelfName={cat.shelf} books={this.state.books} refresh={this.refresh}/> 
                    )
                  }
                </div>
              </div>
              <Link
                to='/search'
                className="open-search"
                ><button>Add a book</button></Link>
            </div>
        )} />
      </div>          
    )
  }
}

export default BooksApp
