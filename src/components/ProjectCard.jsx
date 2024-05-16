import React from 'react'
import Card from 'react-bootstrap/Card';
import photo from '../assets/media_playerimg.png'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card className='shadow w-100 m-4' onClick={handleShow}>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title className='text-center'>Media Player</Card.Title>
                </Card.Body>
            </Card>


            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Media Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6} sm={12}>
                            <img src={photo} alt="projectimage" className='w-100'/>
                        </Col>
                        <Col md={6} sm={12}>
                            <h5>Description</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ducimus quam? Ducimus eos, numquam deserunt sunt dignissimos tempora expedita voluptates harum consectetur excepturi! Nulla labore est sunt deleniti quasi exercitationem.</p>

                            <h5>Technologies</h5>
                            <p>React</p>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer className='me-auto'>
                     <Link><FontAwesomeIcon icon={faGithub} className='fa-2x' /></Link>
                     <Link><FontAwesomeIcon icon={faLink} className='fa-2x ms-2' /></Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectCard
