import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "./App";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from './images/can-of-books-fr.jpg';
import { CarouselItem } from "react-bootstrap";


let server = import.meta.env.VITE_SERVER;

// class BestBooks extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: []
//     }
//   }

// componentDidMount() {
//   console.log("Mount up");
//   // best books goes here?
// };

// componentWillUnmount () {
//   console.log("Unmounted");
// }



function BestBooks(props) {
 
  useEffect( ()=> {
    getBooks();
}, []);
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
  <h2>Zach and Brendans Bibliotheca </h2>
  {books.length > 0 && (

     <Carousel style={{padding: "5em", background:"#111"}}>
          
          {
            books.map( books => 
              <Carousel.Item key={books._id}>
               <img src={`https://placehold.co/800x400?text=${books.title}`} height="400" width="100%" />
               <Carousel.Caption>
                 <p>{books.description}</p>
                 {/* <span id={book._id} onClick={handleDelete} style={{ marginLeft:".5em", color:"red", cursor:"pointer"}}>X</span> */}
               </Carousel.Caption>
              </Carousel.Item>
            )
          }

        </Carousel>
    // <ul>
    //   {books.map((book) => (
    //     <li key={book._id}>
    //       <h3>{book.title}</h3>
    //       <p>{book.description}</p>
    //     </li>
    //   ))}
    // </ul>
  )}
</>
  );
}

export default BestBooks;
