import React, { Component } from "react";
/*Everybook is a function component which use b which is holding books and passing 
book's proprities and also changing shelf of book */
const EveryBook = ({b,ChangeShelfBook}) =>{
//event of changing book's shelf
 const ToChangeShelf=(eve)=>{
   ChangeShelfBook(b,eve.target.value)}
    
      return  (
        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: b.imageLinks? `url(${b.imageLinks.smallThumbnail})`:'' }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={ToChangeShelf} value={b.shelf? b.shelf:'none'/*giving value of book's shelf*/}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{b.title}</div>
                          <div className="book-authors">{b.authors}</div>
                          <div className="book-shelf">{b.shelf?b.shelf:'no shelf'/* cheching book's shelf
                           if it's found and render it */}</div>
                        </div>
      );
      
    
    
    
}
export default EveryBook