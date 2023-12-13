import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BookFormModal(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      if( name === "title" ) { setTitle(value); }
      if( name === "description" ) { setDescription(value); }
      if( name === "author" ) { setAuthor(value); }
      if( name === "status" ) { setStatus(value); }
        console.log(author);
    }
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Books!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <form>
                <input placeholder ="Title" name = "title" onChange={handleChange}  /> 
                <input placeholder="Author" name = "author" onChange={handleChange} /> 
                <input placeholder="Description" name = "description" onChange={handleChange}  /> 
                <input placeholder="Status" name = "status" onChange={handleChange} /> 
            </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ () => props.handleSubmit(title, author, description, status)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookFormModal;