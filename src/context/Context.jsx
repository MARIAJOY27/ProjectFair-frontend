import React, { createContext, useState } from 'react'

export const AddProjectResponseStatusContext = createContext()
export const editProjectResponseContext = createContext()
export const isAuthorizedContext = createContext()


function Context({ children }) {
    //Create a state to share between the components
    const [AddResponse, setAddResponse] = useState({})
    const [editResponse, setEditResponse] = useState({})
    const [isAuthorized, setIsAuthorized] = useState(true)

    return (
        //to provide the context to all components
        <AddProjectResponseStatusContext.Provider value={{ AddResponse, setAddResponse }} >
            <editProjectResponseContext.Provider value={{ editResponse, setEditResponse }}>
                <isAuthorizedContext.Provider value={{ isAuthorized, setIsAuthorized }}>
                    {children}
                </isAuthorizedContext.Provider>

            </editProjectResponseContext.Provider>

        </AddProjectResponseStatusContext.Provider>

    )
}

export default Context
