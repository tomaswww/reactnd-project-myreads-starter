import React from 'react'
import Book from './Book'
import './App.css'


const Shelf = (props) => {
  return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  <Book />
                </li>
              </ol>
            </div>
          </div>
  )
}
                
export default Shelf
