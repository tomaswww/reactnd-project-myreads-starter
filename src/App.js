import React from 'react'
import Book from './Book'
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
        console.log(books)
        this.setState(() => ({
          books
        }))
      })
      
  }

  moveBook = (bookName,newShelf) => {
    let newArray = this.state.books.map((b)=>{
      if (b.title === bookName ){
        b.shelf = newShelf
        return b
      }
      else {
        return b
      }
    
    })
    this.setState((currentState)=>({
      books: newArray
    }))
  }

  render() {
    const CurrentlyReading = this.state.books.filter(book =>book.shelf==='currentlyReading');
    const WantToRead = this.state.books.filter(book =>book.shelf==='wantToRead');
    const Read = this.state.books.filter(book =>book.shelf==='read');
    return (
      <div className="app">
        <Route path='/search' render={()=> (
          <BookSearch />
        )} />
        <Route exact path='/' render={()=> (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {
                          CurrentlyReading.map(book =>
                            <li key={book.id}>
                              <Book 
                              title={book.title} 
                              id={book.id} 
                              author={book.authors} 
                              image={book.imageLinks} 
                              shelf={book.shelf} 
                              moveBook={this.moveBook}/>
                            </li>
                            )
                        }
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {
                          WantToRead.map(book =>
                            <li key={book.id}>
                              <Book 
                              title={book.title}
                              id={book.id} 
                              author={book.authors} 
                              image={book.imageLinks} 
                              shelf={book.shelf}
                              moveBook={this.moveBook}/>
                            </li>
                            )
                        }
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {
                          Read.map(book =>
                            <li key={book.id}>
                              <Book 
                              title={book.title} 
                              id={book.id} 
                              author={book.authors} 
                              image={book.imageLinks} 
                              shelf={book.shelf}
                              moveBook={this.moveBook}/>
                            </li>
                            )
                        }
                      </ol>
                    </div>
                  </div>
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
