import React, { useState } from 'react';
import axios from 'axios';
import App from './App';

let server = import.meta.env.VITE_SERVER;


// class BestBooks extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: []
//     }
//   }






function BestBooks() {
  const [books, setbooks] = useState([]);

  App.get()

  async function getBooks() {
    try {
      let response = await axios.get(`${server}/books`)
      setbooks(response.data);
    } catch (e) { console.error(e.message); }
  }

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      {this.state.books.length ? (
        <p>Book Carousel coming soon</p>
      ) : (
        <h3>No Books Found :</h3>
      )}
    </>
  )
}

/* TODO: render all the books in a Carousel */

export default BestBooks;
