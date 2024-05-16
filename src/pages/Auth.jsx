import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function Auth({register}) {
  const registerForm = register?true:false 
  return (
    <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '100vh' }}>

      <div className='w-75 container'>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}><h5><FontAwesomeIcon icon={faArrowLeft} /> Back to Home</h5></Link>
        <div className='rounded mt-3' style={{ backgroundColor: 'yellowgreen' }}>
          <Row>
            <Col sm={12} md={6} className='p-5'>
              <img src="https://cdn1.iconfinder.com/data/icons/ringtone-music-instruments/512/user-login-comfirm-accept-person-id-green-512.png" alt="loginimg" className='w-75 ' />
            </Col>
            <Col sm={12} md={6} className='d-flex justify-content-center align-items-center flex-column'>
              <h2 className='text-light'><FontAwesomeIcon icon={faStackOverflow} className='fa-2x ' /> Project fair</h2>

              {registerForm? <h5 className='text-light'>Sign Up to your account</h5> :
              <h5 className='text-light'>Sign In to your account</h5>}

              <Form className='mt-5 w-75'>

              {registerForm && <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Control type='email' placeholder='Username' />
                </Form.Group>}

                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Control type='email' placeholder='Email' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>


                {registerForm?  <div>
                  <Button variant='warning' type='submit' className='w-100'>Register</Button>
                  <p className='text-light mt-2'>Already a User? Click here to<Link to={'/login'} className='text-danger'> Login</Link></p>
                </div>

                  :

                <div>
                  <Button variant='warning' type='submit' className='w-100'>Login</Button>
                  <p className='text-light mt-2'>New User? Click here to <Link to={'/register'} className='text-danger'> Register</Link></p>
                </div>}

              </Form>


            </Col>
          </Row>
        </div>
      </div>

    </div >
  )
}

export default Auth
