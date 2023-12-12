import React, { useState } from "react";
import axios from "axios";
import App from "./App";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from './images/can-of-books-fr.jpg';


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

  async function getBooks() {
    try {
      let response = await axios.get(`${server}books`);
      setbooks(response.data);
      console.log(response.data);
    } catch (e) {
      console.error(e.message);
    }
  }
  console.log(books);

  return (
   <>
  <h2>Zach and Brendans Book Banjoriee</h2>
  <button onClick={getBooks}>Get books</button>
  {books.length > 0 && (
    <ul>
      {books.map((book) => (
        <li key={book._id}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </li>
      ))}
    </ul>
  )}
</>
  );
}

export default BestBooks;
