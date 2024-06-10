import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import usericon from '../assets/user-icon.png'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { serverUrl } from '../services/baseUrl';
import { updateProfileApi } from '../services/allAPI';
import { toast } from 'react-toastify';


function Profile() {
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username:"",
    email:"",
    password:"",
    github:"",
    linkedin:"",
    profile:""
  })
  const [existingImage, setExistingImage] = useState("")
  const [preview, setPreview] = useState("")
  const [updateStatus, setUpdateStatus] = useState(false)

  const handleUpdate = async(e)=>{
    e.preventDefault()
    const {username, email,password,github, linkedin,profile} = userDetails
    if(!github || !linkedin){
      alert('Please fill the form completely')
    }
    else{
      const reqBody = new FormData()

      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview?reqBody.append("profile",profile):reqBody.append("profile",existingImage)

      const token = sessionStorage.getItem("token")
      if(preview){
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await updateProfileApi(reqBody,reqHeader)

        if(result.status == 200){
          toast.success('Profile updated successfully')
          sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          setUpdateStatus(!updateStatus)
        }
        else{
          console.log(result);
          toast.error('Something went wrong')
        }

      }
      else{
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await updateProfileApi(reqBody,reqHeader)

        if(result.status == 200){
          toast.success('Profile updated successfully')
          sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          setUpdateStatus(!updateStatus)
        }
        else{
          console.log(result);
          toast.error('Something went wrong')
        }

      }

    }
  }

  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setUserDetails({...userDetails, username:user.username , email:user.mailId , password:user.password , github:user.github , linkedin:user.linkedIn})
      setExistingImage(user.profile)
    }
  },[updateStatus])

   useEffect(()=>{
     if(userDetails.profile){
      setPreview(URL.createObjectURL(userDetails.profile))
     }
     else{
      setPreview("")
     }
   },[userDetails.profile])

  console.log(userDetails);

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
              
                <label htmlFor='image'>
                  <input id='image' type="file" style={{display:"none"}} onChange={(e)=>setUserDetails({...userDetails,profile:e.target.files[0]})}  />
                  {existingImage ==""?
                    <img src={preview?preview:usericon} width={'200px'} height={'200px'} alt="no image" />
                  :
                  <img src={preview?preview:`${serverUrl}/uploads/${existingImage}`} width={'200px'} height={'200px'} alt="no image" />
                  }
                  </label>
               
    
                <div className='my-3 w-100'>
                  <input type="text" placeholder='Github' value={userDetails.github} onChange={(e)=>setUserDetails({...userDetails , github:e.target.value})} className='form-control w-100' />
                </div>
                <div className='mb-3 w-100'>
                  <input type="text" placeholder='LinkedIn' value={userDetails.linkedin} onChange={(e)=>setUserDetails({...userDetails , linkedin:e.target.value})} className='form-control w-100' />
                </div>
                <div className='mb-3 w-100'>
                  <button onClick={handleUpdate} className='btn w-100' style={{backgroundColor:'yellowgreen',color:'white'}}>Update</button>
                </div>
    
              </div>

           </div>
         </Collapse>

      </div>
    </>
  )
}

export default Profile
