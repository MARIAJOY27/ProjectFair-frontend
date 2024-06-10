import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { allProjectApi } from '../services/allAPI'


function Project() {
  const [allProject, setAllProject] = useState([])
  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
      getAllProject()
    }

  }, [searchKey])

  const getAllProject = async () => {
    const result = await allProjectApi(searchKey)
    setAllProject(result.data);
  }

  console.log(allProject);
  console.log(searchKey);

  return (
    <>
      <Header />

      <div className='mt-5'>
        <h2 className='text-center'>All Projects</h2>
      </div>

      {token ?
        <div>
          <div className='row mt-5 d-flex justify-content-center w-100'>
            <div className="col-md-4"></div>
            <div className="col-md-4 p-4 d-flex justify-content-center">
              <input type="text" className='form-control ' placeholder='Search by technologies' onChange={(e) => setSearchKey(e.target.value)} />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='mt-2  text-secondary' style={{ marginLeft: "-30px" }} />
            </div>
            <div className="col-md-4"></div>
          </div>

          {allProject?.length > 0 ?
            <div>

              <Row className='mt-4 me-4'>
                {allProject.map((item) => (<Col sm={12} md={6} lg={4} className='p-3'>
                  <ProjectCard project={item} />
                </Col>))}

              </Row>
            </div>

            :
            <div className='mt-5'>
              <h2 className='text-danger text-center fs-3'>No projects to display...</h2>
            </div>}

        </div>

        :

        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="no image" width={'17%'} />
          <h3 className='mt-4 text-danger'>Please <Link to={'/login'}>Login</Link> to see more projects</h3>
        </div>}

    </>
  )
}

export default Project
