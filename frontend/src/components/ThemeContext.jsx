import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext=createContext();

const ThemeProvider = ({children}) => {
    const [darkMode,setDarkMode]=useState(false);
    const toggleDarkMode=()=>{
        setDarkMode(!darkMode);
    };
    useEffect(()=>{
       if(darkMode){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
       }else{
        document.body.style.backgroundColor='rgb(217, 217, 217)';
        document.body.style.color='#333';
       }
    },[darkMode]);
  return (
    <ThemeContext.Provider value={{darkMode,toggleDarkMode}}>
        {children}
      
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
