import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='mt-5 w-100 p-4' style={{backgroundColor:"yellowgreen"}}>
        <div className="row mx-md-5 mx-3">
            
            <div className="col-md-4">
                <h4 className='text-light'><FontAwesomeIcon icon={faStackOverflow} /> Project Fair</h4>
                <p className='mt-3' style={{textAlign:"justify"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam placeat facilis dolorem enim, repellat amet quis odio distinctio harum, aliquid laborum corrupti cumque veniam ipsa? Facere quod nesciunt consequatur!repellat amet quis odio distinctio harum, aliquid laborum corrupti cumque</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-1">
            <h4 className='text-light'>Links</h4>
                <Link  style={{color:"black",textDecoration:"none"}} to={'/'}><p className='mt-3'>Home Page</p></Link>
                <Link style={{color:"black",textDecoration:"none"}} to={'/project'}><p>Project</p></Link>
                <Link style={{color:"black",textDecoration:"none"}} to={'/dashboard'}><p>Dashboard</p></Link>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
            <h4 className='text-light'>Guides</h4>
                <Link  style={{color:"black",textDecoration:"none"}} to={'/https://react.dev/'}><p className='mt-3'>React</p></Link>
                <Link style={{color:"black",textDecoration:"none"}} to={'/https://react-bootstrap.netlify.app/'}><p>React Bootstrap</p></Link>
                <Link style={{color:"black",textDecoration:"none"}} to={'/https://bootswatch.com/'}><p>React Bootswatch</p></Link>
            </div>
            <div className="col-md-3">
                <h4 className='text-light'>Contact Us</h4>
                <div className='d-flex mt-3'>
                    <input className=' form-control' type="text" placeholder='Enter Mail ID'  />
                    <button className='btn btn-warning ms-3'>Subscribe</button>
                </div>
                <div className='d-flex mt-4 mx-4 justify-content-between'>
                <FontAwesomeIcon className='fa-2x text-light' icon={faInstagram} />
                <FontAwesomeIcon className='fa-2x text-light' icon={faTwitter} />
                <FontAwesomeIcon className='fa-2x text-light' icon={faLinkedin} />
                <FontAwesomeIcon className='fa-2x text-light' icon={faFacebook} />
                </div>
            </div>
            
        </div>


      <p className='text-center text-primary'>Copyright @ 2024 Project Fair, Built with React</p>   
      </div>
      
      
    </>
  )
}

export default Footer
