import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='my-4 mx-4 shadow p-3 rounded' onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
        <div className='d-flex justify-content-between'>
          <h3 className='mt-3'>Profile</h3>
          <div className='mt-3'>
            <button onClick={() => setOpen(!open)} type='button' className='btn btn-outline-info'><FontAwesomeIcon icon={faAngleDown} /></button>
          </div>

         </div>

         <Collapse in={open}>
           <div>

             <div className='mt-4 d-flex justify-content-center align-items-center flex-column'>
                <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" className='w-50' alt="" />
    
                <div className='my-3 w-100'>
                  <input type="text" placeholder='Github' className='form-control w-100' />
                </div>
                <div className='mb-3 w-100'>
                  <input type="text" placeholder='Website' className='form-control w-100' />
                </div>
                <div className='mb-3 w-100'>
                  <button className='btn w-100' style={{backgroundColor:'yellowgreen',color:'white'}}>Update</button>
                </div>
    
              </div>

           </div>
         </Collapse>

      </div>
    </>
  )
}

export default Profile
