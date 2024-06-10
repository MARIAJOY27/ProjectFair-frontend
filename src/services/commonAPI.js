//import axios

import axios from "axios"
 

export const commonAPI = async(httpRequest, url, reqbody, reqHeader)=>{
    const reqConfig = {
        method:httpRequest,
        url,     //if key and value are both same,then give that name only
        data:reqbody,
        headers:reqHeader?reqHeader:{'Content-Type':'application/json'}
    }

   return await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}