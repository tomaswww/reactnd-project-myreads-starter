import React from 'react'
import ShelfChanger from './ShelfChanger'
import './App.css'

const Book = (props) => {
  return (
          <div className="book">
            <div className="book-top">
              { props.image ?
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+props.image.thumbnail+'")'}}>
                  <ShelfChanger shelf={props.shelf} title={props.title} id={props.id} refresh={props.refresh}/>
                </div>
                :
                <div className="book-cover" style={{ width: 128, height: 193}}>
                  <ShelfChanger shelf={props.shelf} title={props.title} id={props.id} refresh={props.refresh}/>
                </div>
              } 
            </div>
            <div className="book-title">{props.title}</div>
              { props.author ?
                props.author.map(author =>
                  <div className="book-authors" key={author}>{author}</div>
              ):
                  <div className="book-authors">Unknown Author</div>
              }              
          </div>
  )
}
                   

export default Book
