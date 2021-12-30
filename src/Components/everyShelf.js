import React, { Component } from "react";
import EveryBook from "./MyBooks";
/*Everyshelf is a function components which holding details of shelves*/
const EveryShelf =({className,MyBookList,BookShelf,ChangeShelfBook})=>{
        return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{className}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {MyBookList.filter((b=>b.shelf=== BookShelf)).map((b)=>/*filtering books basid on shelf 
                     and mapping them in their shelf*/
                     <EveryBook key ={b.id} b={b} ChangeShelfBook={ChangeShelfBook}/>
                     )} 
                    </ol>
                  </div>
                </div>
        )
        

}
export default EveryShelf