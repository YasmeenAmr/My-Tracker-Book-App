import React from 'react'
import * as BooksAPI from './BooksAPI'
import { BrowserRouter, Link,Route} from 'react-router-dom'
import './App.css'
import EveryShelf from './Components/everyShelf'
import SearchB from './Components/searchBook'
 
class BooksApp extends React.Component {
  state = {
   // showSearchPage: false,
    MyBookList:[],// holding array  of books from api in home page
    searchquery:'',
    resultbook:[],//holding arrray of book rom api in search page
    bookliststate:false
  };
  //getting books from api and store it in MyBookList array
  async componentDidMount(){
  let MyBookList =await BooksAPI.getAll()
  this.setState ({MyBookList}) 
  console.log(MyBookList)
    } 
  //change shelf of the book by getting book and the shelf and update book's shelf with the new shelf 
    ChangeShelfBook=async(book,Whichshelf)=>{
      await BooksAPI.update(book,Whichshelf);
      let MyBookList =await BooksAPI.getAll()
      this.setState ({MyBookList}) 
      console.log(MyBookList)
      this.resultbooksearch(this.state.searchquery)
   }
   //updating search query
    updasearchquery=async(eve)=>{
       await this.setState({
        searchquery: eve.target.value
      })
     console.log(this.state.searchquery)
     this.resultbooksearch(this.state.searchquery)
    }
   //searching for more books and mapping them in search page
    resultbooksearch=async(searchbook)=>
    {
      await BooksAPI.search(searchbook) . then((resvalue)=>{
       //checking books avalabilty
       if(resvalue && !resvalue.error)
      { 
        // searching for shelf
        this.setState({resultbook:resvalue.map((b)=>{
          this.state.MyBookList.filter((bo)=>{
            if(b.id===bo.id){
              b.shelf = bo.shelf
            }
          })
          return b;
  
        }),bookliststate:true})
       
       }
     else{ 
      this.setState({resultbook:'no result',bookliststate:false})
     } 
    })
      console.log(this.state.resultbook)
    }
  

 
  render() {
    return (
     
      <div className="app">
         <BrowserRouter >     
       <Route exact path='/search'>
         <SearchB searchquery={this.state.searchquery} resultbook={this.state.resultbook} 
         updasearchquery={this.updasearchquery}  resultbooksearch={this. resultbooksearch}
         ChangeShelfBook={this.ChangeShelfBook} bookliststate={this.state.bookliststate}/>
         </Route>
         <Route exact path='/'>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <EveryShelf  className='Currently Reading' MyBookList={this.state.MyBookList} BookShelf='currentlyReading'ChangeShelfBook={this.ChangeShelfBook}/>
              <EveryShelf className='Want to Read' MyBookList={this.state.MyBookList} BookShelf='wantToRead'ChangeShelfBook={this.ChangeShelfBook}/>
              <EveryShelf className='Read'  MyBookList={this.state.MyBookList} BookShelf='read'ChangeShelfBook={this.ChangeShelfBook}/>
            </div>
            <div className="open-search">
            <Link to="/search" >
              <button>Add a book</button>
            </Link>
            </div>
          </div>
         </div>
         </Route>
         </BrowserRouter>
         </div>
         
    )
  }
 
}
export default BooksApp
