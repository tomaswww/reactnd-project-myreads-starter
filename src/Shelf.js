import React from 'react'
import Book from './Book'
import './App.css'


const Shelf = (props) => {
  const currentShelfBooks = props.books.filter(book =>book.shelf===props.shelfName);
  let name = 'loading'
  if (props.shelfName==='read'){
    name = 'Read'
  }
  else if (props.shelfName==='currentlyReading') {
    name = 'Currently Reading'
  }
  else {
    name = 'Want To Read'
  }
  return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  currentShelfBooks.map(book =>
                            <li key={book.id}>
                              <Book 
                              title={book.title} 
                              id={book} 
                              key={book.id} 
                              author={book.authors} 
                              image={book.imageLinks} 
                              shelf={book.shelf} 
                              refresh={props.refresh}/>
                            </li>
                  )
                }
              </ol>
            </div>
          </div>
  )
}
                
export default Shelf
