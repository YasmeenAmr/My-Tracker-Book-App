import React, { Component } from "react";
import EveryBook from "./MyBooks";
import { Link } from "react-router-dom";
//holding search page details and mapping books in search page depends on updating search quary
const SearchB =({searchquery,updasearchquery, resultbooksearch,ChangeShelfBook,resultbook,bookliststate})=> {
        return(
           
            <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" >
            <button className="close-search">Close</button>
            </Link>
              <div className="search-books-input-wrapper">
             <input type="text" placeholder="Search by title or author..." onChange={updasearchquery}/>
             </div>
             </div>
             <div className="search-books-results">
               <ol className="books-grid">
               {  bookliststate? 
                  (
                  //mapping books depends on search and also getting it's shelf 
                   resultbook.map((b)=>(
                     <EveryBook key ={b.id} b={b} ChangeShelfBook={ChangeShelfBook} resultbooksearch={resultbooksearch}/>
                     ) )
                  )     
            :
            (
           <div className="noresult">NO result</div>
            )
            }
            </ol>
            </div>
            </div>
            
        )
           
        

}
export default SearchB