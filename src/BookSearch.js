import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'

class BookSearch extends Component {
  state = {
    books: []
  }

  getResults(query) {
    BooksAPI.search(query)
      .then((books) => {
        if (typeof books !== 'undefined'){
          if (books.length > 0){
            this.setState(() => ({
              books
          }))
          }
          else {
          books = []
          this.setState(() => ({
              books
          }))
        }
        }
        else {
          books = []
          this.setState(() => ({
              books
          }))
        }
      })
  }

  refresh = () => {
      this.props.refresh()
  }

  render(){
      let shelf ='none'
      if (this.state.books.shelf !== 'undefined') {
        shelf = this.state.books.shelf
      }
      return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
                <button className="close-search" onClick={this.refresh()} >Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onKeyUp={e => this.getResults(e.target.value)} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.map((book)=>(
                  <Book 
                    title={book.title} 
                    id={book}
                    key={book.id} 
                    author={book.authors} 
                    image={book.imageLinks} 
                    shelf={shelf}
                    refresh="none"
                  />
                ))}
              </ol>
            </div>
          </div>
    )
  }
}
                   

export default BookSearch
