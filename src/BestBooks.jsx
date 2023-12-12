import React, { useState } from "react";
import axios from "axios";
import App from "./App";
import Carousel from "react-bootstrap/Carousel";

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

  App.get();

  async function getBooks() {
    try {
      let response = await axios.get(`${server}/books`);
      setbooks(response.data);
    } catch (e) {
      console.error(e.message);
    }
  }

  if (books.length > 0) {
    return (
      <>
        <h2>Zach and Brendans Book Banjoriee</h2>
        <Carousel>
          <Carousel.Caption>
            <h3>books.title</h3>
            <p>books.description</p>
          </Carousel.Caption>
        </Carousel>
      </>
    );
  } else {
    return <p>No books here</p>;
  }
}



export default BestBooks;
