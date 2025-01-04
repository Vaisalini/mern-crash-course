import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { FaPlus,FaMoon,FaSun } from 'react-icons/fa' 
import { ThemeContext } from './ThemeContext'
import {MdEdit} from 'react-icons/md'
const Navbar = () => {
    const {darkMode,toggleDarkMode}=useContext(ThemeContext);
  return (
    
    <div id="navbar" style={styles.navbar}>
        
        <div style={styles.title}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>PRODUCT STORE</Link>
        </div>
        <div>
        
            <Link to={"/create"}>
            <button style={styles.button}><FaPlus size={20}/></button>
            </Link>
            
            
            <button style={styles.modeButton} onClick={toggleDarkMode}>{darkMode?<FaMoon size={20}/> : <FaSun size={20}/>}</button>
            
            </div>
         
    </div>
  )
}

const styles={
    navbar:{
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : '10px 20px',
        backgroundColor : 'inherit',
        color :'inherit',
        

    },
    title:{
        fontSize:'30px',
        fontWeight:'bold'
    },
    plusBotton:{
        display :'flex',
        alignItems:'center'
    },
    button:{
        backgroundColor:"rgba(160, 237, 17, 0.82)",
        border:'none',
        padding:'10px 15px',
        borderRadius:'50%',
        cursor:'pointer',
        color:'black',
        fontSize:'28px',
        borderColor:'black',
        borderWidth:'3px',
        borderStyle:'solid'
    },
    
    modeButton:{
        padding:'20px 20px',
       backgroundColor:'transparent',
       border:'none',
       cursor:'pointer',
       color:'inherit',
       fontSize:'20px'
    }
}

export default Navbar
