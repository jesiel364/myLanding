import { createContext, useState, useEffect } from "react";

export const FormContext = createContext()

export const FormProvider = ({ children }) => {

const [show, setShow] = useState(false)

return (
        <FormContext.Provider value={{show, setShow}}>
            {children}
        </FormContext.Provider>
        )
        
        
}