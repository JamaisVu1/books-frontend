import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "./App";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import BookFormModal from "./Modal";
import BookUpdateModal from "./updateModal";
// import cors from "cors";
// App.use(cors());

let SERVER = import.meta.env.VITE_SERVER;

function BestBooks(props) {
  useEffect(() => {
    getBooks();
  }, []);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSubmit = async (title, author, description, status) => {
    let book = { title, author, description, status };
    console.log("Sending Book to server", book);
    try {
      let response = await axios.post(`${SERVER}books`, book);
      console.log("Server Response", response);
      setBooks([...books, response.data]);
    } catch (e) {
      console.error(e.message);
    }
  };

  const selectBook = (book) => {
    setSelectedBook(book);
    console.log(selectedBook);
  }

  async function handleUpdate(updatedBook){
    let response = await axios.put(`${SERVER}books/${updatedBook._id}`, updatedBook)
   
    let newBooks = books.map(book => {
      if(book._id === updatedBook._id){return updatedBook; }
      else {return book;}
});
    setBooks(newBooks);
  }

 
  async function getBooks() {
    try {
      let response = await axios.get(`${SERVER}books`);
      setBooks(response.data);
      // console.log(response.data);
    } catch (e) {
      console.error(e.message);
    }
  }
  // console.log(books);

  const handleDelete = async (e) => {
    console.log("Delete", e.target.id);
    let response = await axios.delete(`${SERVER}books/${e.target.id}`);
    console.log(response);
    // let books2 = response.data; // {}
    let newBooks = books.filter((book) => {
      return book._id !== e.target.id;
    });
    console.log(newBooks);
    setBooks(newBooks);
  }; 
  return (
    <>
      <h2>Zach and Brendans Bibliotheca </h2>
      {books.length ? (
        <Carousel style={{ padding: "5em", background: "#111" }}>
          {books.map((book) => (
            <Carousel.Item key={book._id}>
              <img
                src={`https://placehold.co/800x400?text=${book.title}`}
                height="400"
                width="100%"
              />
              <Carousel.Caption>
                <p style={{ color: "#111" }}>{book.author}</p>
                <p style={{ color: "#111" }}>{book.description}</p>
                <span
                  id={book._id}
                  onClick={handleDelete}
                  style={{
                    marginLeft: ".5em",
                    color: "red",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </span>
                <BookUpdateModal handleUpdate={handleUpdate} selectedBook={selectedBook} userSelect= {selectBook}  book= {book}/>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <h2>Books not found</h2>
      )}
      <BookFormModal handleSubmit={handleSubmit} />
    </>
  );  
}

export default BestBooks;
