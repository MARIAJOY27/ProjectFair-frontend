import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import EditProject from './EditProject'
import { deleteAProjectApi, getUserProjectApi } from '../services/allAPI'
import { Link } from 'react-router-dom'
import { AddProjectResponseStatusContext, editProjectResponseContext } from '../context/Context'


function MyProject() {
  const { AddResponse } = useContext(AddProjectResponseStatusContext)
  const {editResponse} = useContext(editProjectResponseContext)

  const [userProject, setUserProject] = useState([])

  const getAllUserProject = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserProjectApi(reqHeader)
      setUserProject(result.data);
    }

  }

  const deleteProject = async (id) => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await deleteAProjectApi(id, reqHeader)
      console.log(result);
      if(result.status == 200){
        getAllUserProject()
      }
      else{
        alert('Something went wrong')
      }

    }

  }

  useEffect(() => {
    getAllUserProject()
  }, [AddResponse, editResponse])

  return (
    <div className='m-5 shadow p-3 rounded'>
      <div className="d-flex">
        <h3 className='text-success mt-3'>My Projects</h3>
        <div className='ms-auto mt-3'>
          <AddProject />
        </div>
      </div>

      {userProject?.length > 0 ?
        userProject?.map((item) => (
          <div className='mt-4 p-3 bg-light rounded d-flex'>
            <h5>{item.title}</h5>
            <div className='d-flex ms-auto'>
              <EditProject project={item} />
              <Link to={item.github} target='_blank'><FontAwesomeIcon icon={faGithub} className='text-success mx-3' /></Link>
              <FontAwesomeIcon icon={faTrash} className='text-danger mx-3' onClick={()=>deleteProject(item._id)} />
            </div>
          </div>
        ))
        :
        <p className='text-danger mt-3'>No projects yet added</p>}


    </div>
  )
}

export default MyProject
