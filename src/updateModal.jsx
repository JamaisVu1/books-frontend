import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BookUpdateModal(props) {
  const [update, setUpdate] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)
    props.userSelect(props.book)
};

  const handleChange = (e) => {
    

    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdate(update);
   
    console.log(update);
  };

  useEffect(() => {
    setUpdate(props.selectedBook || {});
  }, [props.selectedBook]);
// console.log(props.id);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Update Books
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              id="Title"
              placeholder="Title"
              name="title"
              onChange={handleChange}
            />
            <input placeholder="Author" name="author" onChange={handleChange} />
            <input
              placeholder="Description"
              name="description"
              onChange={handleChange}
            />
            <input placeholder="Status" name="status" onChange={handleChange} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookUpdateModal;
