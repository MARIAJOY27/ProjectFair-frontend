import { serverUrl } from "./baseUrl"
import { commonAPI } from "./commonAPI"


//register
export const registerAPI = async (reqbody) => {
    return await commonAPI('POST', `${serverUrl}/user/register`, reqbody, "")
}

//login
export const loginApi = async (reqbody) => {
    return await commonAPI('POST', `${serverUrl}/user/login`, reqbody, "")
}

//addProject
export const addProjectApi = async (reqbody, reqHeader) => {
    return await commonAPI('POST', `${serverUrl}/projects`, reqbody, reqHeader)
}

//get home project
export const getHomeProjectApi = async () => {
    return await commonAPI('GET', `${serverUrl}/home-project`, "", "")
}

//get all projects
export const allProjectApi = async (searchKey) => {
    //query parameter - path?key = value-->to search w.r.to technologies
    return await commonAPI('GET', `${serverUrl}/all-product?search=${searchKey}`, "", "")
}

//get user project
export const getUserProjectApi = async (reqHeader) => {
    return await commonAPI('GET', `${serverUrl}/user/all-project`, "", reqHeader)
}

//api to delete a user project
export const deleteAProjectApi = async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${serverUrl}/delete-project/${id}`,{},reqHeader)
}

//api to update project
export const updateProjectApi = async(id, reqbody, reqHeader)=>{
    return await commonAPI('PUT',`${serverUrl}/update-project/${id}`,reqbody,reqHeader)
}

//api to update profile
export const updateProfileApi = async(reqbody,reqHeader)=>{
    return await commonAPI('PUT',`${serverUrl}/update-profile`,reqbody,reqHeader)
}