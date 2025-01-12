import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectApi } from '../services/allAPI';
import { AddProjectResponseStatusContext } from '../context/Context';


function AddProject() {
  const {setAddResponse} = useContext(AddProjectResponseStatusContext)

  //state to hold video details
  const [videoDetails, setVideoDetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    projectImage: ""
  })
  const [show, setShow] = useState(false);
  //state to hold url of the file uploaded
  const [preview, setPreview] = useState("")
  //function to close the modal
  const handleClose = () => setShow(false);
  //function to open the modal
  const handleShow = () => setShow(true);
  
  //key attribute can invoke onChange events if its value changes =>line 83
  const [key, setKey] = useState(false)

  const [token, setToken] = useState("")

  //function to clear all data entered in the modal(on clicking cancel button)
  const handleClose1 = () => {
    setVideoDetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      projectImage: ""
    })
    setPreview("")
    setKey(!key)
  }

  //function to add project details
  const handleAdd = async(e) => {
    //avoid data loss
    e.preventDefault()

    const { title, language, github, website, overview, projectImage } = videoDetails
    if (!title || !language || !github || !website || !overview || !projectImage) {
      toast.error('Please fill the form completely')
    }
    else {
      //how to handle uploaded content
      //1) create an object for FormData class
      const reqBody = new FormData()
      //2) use append() method to add data to the body
      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      reqBody.append("projectImage",projectImage)
      if(token){

        let reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result = await addProjectApi(reqBody,reqHeader)
        // console.log(result);
        if(result.status==200){
          handleClose1()
          handleClose()
          setAddResponse(result.data)
        }
        else{
          toast.error('Something went wrong')
          handleClose1()
          handleClose()
        }
        
      }
    }

   

  }

  console.log(videoDetails);

  useEffect(()=>{
     if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
     }
     else{
      setToken("")
     }
  },[])
  console.log(token);

  useEffect(() => {
    //file converted to url
    if (videoDetails.projectImage) {
      setPreview(URL.createObjectURL(videoDetails.projectImage))
    }

  }, [videoDetails.projectImage])

  console.log(preview);

  return (
    <div>
      <Button variant="success" onClick={handleShow}>Add Project</Button>{' '}

      <Modal show={show} onHide={handleClose} size='lg' >
        <Modal.Header closeButton>
          <Modal.Title>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} sm={12}>
              <label htmlFor="image">
                <input id='image' key={key} type="file" style={{ display: 'none' }} onChange={(e) => setVideoDetails({ ...videoDetails, projectImage: e.target.files[0] })} />
                <img src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqriT94F4Hu-pGsKnKUGPgl0y2yiMRoqRneV4mexJSA&s"} alt="no image" width={'350px'} height={'300px'} />
              </label>
            </Col>
            <Col md={6} sm={12}>
              <div className='mb-3 mt-3'>
                <input type="text" className='form-control w-100' placeholder='Project Title' value={videoDetails.title} onChange={(e) => setVideoDetails({ ...videoDetails, title: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control w-100' placeholder='Languages Used' value={videoDetails.language} onChange={(e) => setVideoDetails({ ...videoDetails, language: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control w-100' placeholder='Github Link' value={videoDetails.github} onChange={(e) => setVideoDetails({ ...videoDetails, github: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control w-100' placeholder='Website Link' value={videoDetails.website} onChange={(e) => setVideoDetails({ ...videoDetails, website: e.target.value })} />
              </div>
              <div className='mb-3'>
                <textarea className='form-control w-100 mt-3 ' placeholder='Project Overview' value={videoDetails.overview} onChange={(e) => setVideoDetails({ ...videoDetails, overview: e.target.value })} ></textarea>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />

    </div>
  )
}

export default AddProject
