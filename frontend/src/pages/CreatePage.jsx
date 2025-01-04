import React, { useContext, useState } from 'react'
import { ThemeContext } from '../components/ThemeContext';
import axios from 'axios';
const CreatePage = () => {
  const[newProduct , setNewProduct]=useState({
    name:'',
    price:'',
    image:'',
  });
  
  const handleProduct=async (e) => {
    e.preventDefault();
    //console.log(newProduct);
    try {
      const response=await axios.post('http://localhost:5000/products',newProduct);
      console.log(response.data);
      alert("Product created Successfully!");
      setNewProduct({name:'',price:'',image:''});
    } catch (error) {
      console.log(error);
      alert("Error creating the product");
      
    }
  };
  return (
    <div >
    <div style={styles.container}>
      <h2 style={styles.heading}>CREATEPAGE</h2>
      <div>
      <form style={styles.formstyle} onSubmit={handleProduct}>
          <p>Name of the product : <input placeholder='name' type='text' name='name' value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})} required/></p>
          <p>Price of the product : <input placeholder='price'type='number' name='price'value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})} required/></p>
          <p>Image Link of the product : <input placeholder='Image URL' name='image' value={newProduct.image} onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})} required/></p>
          <button style={styles.button} type='submit'>Add new product</button>
      </form>
      </div>
    </div>
    </div>
  )
}
const styles={
  container:{
       display:'flex',
       flexDirection:'column',
       padding:'20px',
       backgroundColor:'inherit',
       height:'100vh'
  },
  heading:{
    textAlign :'center',
    color:'inherit',
    marginBottom:'20px',
    fontSize:'24px'
  },
  formstyle:{
    textAlign:'center',
    alignItems:'center',
    backgroundColor:'inherit',
    borderRadius:'8px',
    borderColor:'black',
    borderWidth:'2px',
    borderStyle:'solid',
    padding:'20px',
    boxShadow:'0 2px 20px rgba(160, 237, 17, 0.82)',
    marginLeft:'20%',
    marginRight:'20%',
    
    
    
  },
  button:{
    width:'100%',
    padding:'10px',
    borderRadius:'8px',
    border:'none',
    backgroundColor:'rgba(160, 237, 17, 0.82)',
    color:'inherit',
    fontSize:'16px',
    cursor:'pointer',
    marginTop:'10px',
    borderColor:'black',
    borderWidth:'2px',
    borderStyle:'solid'
  }
};
export default CreatePage
