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

const ptbr = [
  {
    lang: 'ptbr',
    menu: ['Sobre','Habilidades', 'Projetos', 'Contato', 'Mudar tema'],
    welcome: ['Seja bem-vindo ao meu portfólio!', 'Desenvolvedor Front End / JavaScript / Python', 'Sou um apaixonado desenvolvedor com um olhar entusiasmado para a criação de soluções inovadoras e eficientes.', 'Abaixo, você encontrará uma seleção de projetos que demonstrem minha experiência e conhecimento em diversas áreas:'],
    
 },
]

const en = [
  {
    lang: 'en',
    menu: ['About','Skills', 'Projects', 'Contact', 'Switch theme'],
    welcome: ['Welcome to my portfolio!', 'Front End Developer / JavaScript / Python', "I'm a passionate developer with an enthusiastic eye for creating innovative and efficient solutions.", 'Below you will find a selection of projects that demonstrate my experience and knowledge in several areas:'],
 },
]

const [lang, setLang] = useState('ptbr')


let [lg, setLg] = useState([])
lg = ptbr

return (
        <FormContext.Provider value={{show, setShow, windowSize, setWindowSize, ptbr, en, lang, setLang, lg}}>
            {children}
        </FormContext.Provider>
        )
        
        
}