import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'


function Project() {
  return (
    <>
      <Header />

      <div className='mt-5'>
        <h2 className='text-center'>All Projects</h2>
      </div>
      
     <div>
        <div>
          <div className='row mt-5 d-flex justify-content-center w-100'>
            <div className="col-md-4"></div>
            <div className="col-md-4 p-4 d-flex justify-content-center">
              <input type="text" className='form-control ' placeholder='Search by technologies' />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='mt-2  text-secondary' style={{ marginLeft: "-30px" }} />
            </div>
            <div className="col-md-4"></div>
          </div>
  
          <Row className='mt-4 me-4'>
            <Col sm={12} md={6} lg={4} className='p-3'>
              <ProjectCard />
            </Col>
  
          </Row>
        </div>
  
        <div className='mt-5'>
          <h2 className='text-danger text-center fs-3'>No projects to display...</h2>
        </div>
     </div>

     <div className='d-flex justify-content-center align-items-center flex-column'>
      <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="no image" width={'17%'} />
      <h3 className='mt-4 text-danger'>Please <Link to={'/login'}>Login</Link> to see more projects</h3>
     </div>

    </>
  )
}

export default Project
