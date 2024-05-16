import React from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap';
import MyProject from '../components/MyProject';
import Profile from '../components/Profile';

function Dashboard({dashboard}) {
  const dash = dashboard

  return (
    <div>
    <Header dash ={dash}/>

    <div className='mt-5'>
       <h3 className='ms-4'>Welcome<span className='text-warning'> User</span></h3>
       <Row className='mt-4'>
        <Col sm={12} md={8}>
          <MyProject/>
        </Col>
        <Col sm={12} md={4}>
          <Profile/>
        </Col>
       </Row>
    </div>
      
    </div>
  )
}

export default Dashboard
