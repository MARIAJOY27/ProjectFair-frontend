import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import pic from '../assets/project1.png'
import { Col, Row } from 'react-bootstrap';


function EditProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
       <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} className='text-info mx-3'/> 


       <Modal show={show} onHide={handleClose} size='lg' >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
            <Col  md={6} sm={12}>
              {/* <img className='mx-4' style={{borderRadius:'10px'}} src={pic} alt="pic" width={'320px'} /> */}
              <label htmlFor="image">
                <input id='image' type="file" style={{display:'none'}}/>
                <img src={pic} alt="no image" width={'300px'}/>
              </label>
            </Col>
            <Col  md={6} sm={12}>
              <div className='mb-3 mt-3'>
                <input type="text" className='form-control w-100' placeholder='Project Title' />
                </div>
              <div className='mb-3'>
                <input type="text" className='form-control w-100' placeholder='Languages Used' />
                </div>
              <div className='mb-3'>
                <input type="text" className='form-control w-100' placeholder='Github Link' />
                </div>
              <div className='mb-3'>
                <input type="text" className='form-control w-100' placeholder='Website Link' />
                </div>
              <div className='mb-3'>
                <textarea className='form-control w-100 mt-3 ' placeholder='Project Overview'></textarea>
                </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default EditProject
