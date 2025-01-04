import React, { useContext, useEffect , useState } from 'react'
import axios from 'axios'
import { ThemeContext } from '../components/ThemeContext.jsx';
import {MdEdit} from 'react-icons/md'
import Modal from 'react-modal';
import { MdDelete } from 'react-icons/md';
const HomePage = () => {
  const[product,setProduct]=useState([]);
  const {darkMode}=useContext(ThemeContext);
  const[isOpen,setIsOpen]=useState(false);
  const[selectedProduct,setSelectedProduct]=useState(null);
  const[updatedProduct,setUpdatedProduct]=useState({name:'',price:'',image:''});
  useEffect(()=>{
    const fetchProducts=async()=>{
     try {
      const response=await axios.get('http://localhost:5000/products');
      console.log(response.data);
      setProduct(response.data.data);
     } catch (error) {
      alert("error in fetching");
      console.log(error.message);
      
     }
    };
    fetchProducts();
  },[]);


  const handleClick=(product)=>{
    setIsOpen(true);
    setSelectedProduct(product);
    setUpdatedProduct({name:product.name,price:product.price,image:product.image});
  }

const handleUpdate=async()=>{
  try {
    const response=await axios.put(`http://localhost:5000/products/${selectedProduct._id}`,updatedProduct);
    console.log(response);
    alert("updated successfully");
    setIsOpen(false);
    window.location.reload();
  } catch (error) {
    console.log(error.message);
    alert("error in updating");
  }
}

const handleDelete=async(product)=>{
  setSelectedProduct(product);
  try {
    const response=await axios.delete(`http://localhost:5000/products/${product._id}`);
    console.log(response);
    alert("Product deleted");
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
}

  return (
    <div style={styles.container}>
<div style={styles.heading}>HOMEPAGE</div>
      
      {product.length===0?(
        <p style={styles.noproducts}>NO PRODUCTS AVAILABLE <a href='/create'>ADD PRODUCT</a></p>
      ):(

        <div style={styles.productList}>
          {product.map((prod) => (
 <div style={styles.productItem}>
    <h3 style={styles.productName}> {prod.name}</h3>
    <p> Rs. {prod.price}</p>
    <img src={prod.image} alt={prod.name} style={styles.productImage} />
    <div>
    <button style={styles.buttonstyle} onClick={()=>handleClick(prod)}><MdEdit size='30px' /></button>
    <button style={styles.buttonstyle} onClick={()=>handleDelete(prod)}><MdDelete size='30px'/></button>
    {isOpen && selectedProduct==prod?(
     <Modal isOpen={isOpen} style={customModalStyle(darkMode)} >
      <h2>Edit your product</h2>
      <p >Name : <input type='text'placeholder={prod.name} onChange={(e)=>setUpdatedProduct({...updatedProduct,name:e.target.value})}/></p>
      <p>Price : <input type='Number' placeholder={prod.price} onChange={(e)=>setUpdatedProduct({...updatedProduct,price:e.target.value})}/></p>
      <p>Image Link :<input type='text' placeholder={prod.image} onChange={(e)=>setUpdatedProduct({...updatedProduct,image:e.target.value})}/></p>
      <button style={styles.modalbuttonstyle} onClick={handleUpdate}>UPDATE</button>
      <button style={styles.modalbuttonstyle} onClick={()=>setIsOpen(false)}>CANCEL</button>
     </Modal>
    ):(null)}
    </div>
  </div>
))}
        
      
      
    </div>
   
  )}
  </div>
  );
};

export default HomePage

const customModalStyle=(darkMode)=>({
  content:{
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    padding:'20px',
    borderColor:'black',
    borderWidth:'2px',
    transform:'translate(-50%,-50%)',
    borderRadius:'8px',
    boxShadow:'0 2px 20px rgba(160, 237, 17, 0.82)',
    maxWidth:'400px',
    width:'90%',
    color: darkMode ? "white" : "black",
    backgroundColor:darkMode ? '#333' : '#fff'
  },
  overlay:{
    zIndex:'2000'
  }
})

const styles={
container:{
  textAlign:'center',
  fontFamily:'arial',
  padding:'20px',
  
},
heading:{
  fontSize:'2rem',
  marginBottom:'20px'
},
noproducts:{
  fontSize:'1.2rem'
},
productList:{
  display:'flex',
  flexWrap:'wrap',
  justifyContent : 'center',
  gap:'20px'
},
productItem:{
  padding:'20px',
  borderRadius:'8px',
  borderColor:'black',
  borderWidth:'2px',
  borderStyle:'solid',
  boxShadow:'0 2px 10px rgba(160, 237, 17, 0.82)',
  textAlign:'center',
  width:'200px'
},
productName:{
  fontSize:'1.2rem'
},
productImage:{
  width:'150px',
  height:'150px',
  objectFit:'cover',
  borderRadius:'8px'
},
buttonstyle:{
borderRadius:'8px',
marginTop:'20px',
backgroundColor:'rgba(160, 237, 17, 0.82)',
borderColor:'rgba(160, 237, 17, 0.82)'
},
modalbuttonstyle:{
  padding:'5px',
  marginRight:'10px',
  borderRadius:'3px',
  backgroundColor:'rgba(160, 237, 17, 0.82)'
}

}
