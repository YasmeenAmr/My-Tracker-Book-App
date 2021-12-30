
## Project Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── Components(New Folder)
    ├──├──everyShelf.js # holding details of each shelf
    ├──├──MyBook.js # holding details of each book
    ├──├──searchBook.js # holding details of search page
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Features

   1-Getting books from Google api to in home page 'MyRead'
   2-Choosing which shelf wants to moving the books to
   3-Updating searching bar 
   4-Searching for more books 
   5-Adding more books from search to home page 'MyRead'
   6-Appearing shelf of each book

## Summary

  This project is about buliding library of books from google books data which is hosted by udacity and also shelves and store it in their shelves and also updating shelves ,searching for more books to add them in this library with appearing current shelf by using NodeJs server as backend by using React to update UI as frontend.

## Tecnology

   1-NodeJs->Server
   2-React->UI updating
   3-React_Router->Routing between pages

## Instulation
   
   1-Use this command to install packages
```npm install
   2- use this command to start server
```npm start
   3- use this command to instal router
```npm instat react-router-dom



