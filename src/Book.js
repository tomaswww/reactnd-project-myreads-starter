import React from 'react'
import ShelfChanger from './ShelfChanger'

const Book = (props) => {
  console.log(props)
    return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+props.image+'")'}}></div>
                  <ShelfChanger shelf={props.shelf} title={props.title} />
              </div>
              <div className="book-title">{props.title}</div>
              <div className="book-authors">{props.author}</div>
            </div>
    )
}
                   

export default Book
