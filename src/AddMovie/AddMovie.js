import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as Unicons from '@iconscout/react-unicons';

import './AddMovie.css'
function AddMovie({add}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rate, setRate] = useState(0)
  const [posterUrl, setPosterUrl] = useState('')

const handleTitle = (e) => {
    setTitle(e.target.value);
};
const handleDescription = (e) => {
    setDescription(e.target.value);
};
const handleRate = (e) => {
    setRate(e.target.value);
};
const handlePoster = (e) => {
    setPosterUrl(e.target.value);
};

const handleAdd = () => {
const newMovie = {title, description, rate, posterUrl}
add(newMovie)
handleClose()
}


  return (
    <div  className='addmovie'>
      <Button variant="dark" onClick={handleShow}><Unicons.UilPlusCircle/>
        Add New Movie
      </Button> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title :</Form.Label>
              <Form.Control onChange={(e)=>handleTitle(e)}
                type="text"
                placeholder="Movie title"
                autoFocus
              />
                <Form.Label>Description :</Form.Label>
              <Form.Control onChange={(e)=>handleDescription(e)}
                type="text"
                placeholder="Movie description"
                autoFocus
              />
                <Form.Label>Rate :</Form.Label>
              <Form.Control onChange={(e)=>handleRate(e)} max={5}
                type="number"
                placeholder="Movie Rate"
                autoFocus
              />
                <Form.Label>PosterUrl :</Form.Label>
              <Form.Control onChange={(e)=>handlePoster(e)}
                type="text"
                placeholder="Movie PosterUrl"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>handleAdd()} variant="primary" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddMovie ;