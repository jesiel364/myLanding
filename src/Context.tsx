import { createContext, useState, useEffect } from "react";

export const FormContext = createContext()

export const FormProvider = ({ children }) => {

const [windowSize, setWindowSize] = useState([
        window.innerWidth,
       
      ]);
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
const [show, setShow] = useState(false)

return (
        <FormContext.Provider value={{show, setShow, windowSize, setWindowSize}}>
            {children}
        </FormContext.Provider>
        )
        
        
}