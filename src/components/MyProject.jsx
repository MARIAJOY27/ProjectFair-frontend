import React from 'react'
import AddProject from './AddProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import EditProject from './EditProject'


function MyProject() {
  return (
    <div className='m-5 shadow p-3 rounded'>
        <div className="d-flex">
            <h3 className='text-success mt-3'>My Projects</h3>
            <div className='ms-auto mt-3'>
                <AddProject/>
            </div>
        </div>

        <div className='mt-4 p-3 bg-light rounded d-flex'>
              <h5>Media Player</h5>
              <div className='d-flex ms-auto'>
              <EditProject/>
              <FontAwesomeIcon icon={faGithub} className='text-success mx-3' />
              <FontAwesomeIcon icon={faTrash} className='text-danger mx-3' />
              </div>     
        </div>

      
    </div>
  )
}

export default MyProject
