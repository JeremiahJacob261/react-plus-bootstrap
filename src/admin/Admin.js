import React,{useState} from 'react';
import {db,storage}from '../components/firebase-config'
import {render} from 'react-dom';
import {Form,Button,File} from 'react-bootstrap';
import { collection, addDoc , doc, setDoc } from "firebase/firestore";
import '../style.css';
      function AdminHome (){
       
         const[product,setProduct]=useState();
         const[price,setPrice]=useState();
         const [imageUpload ,setImageUpload]=useState(null);
          const Lick= async()=>{
            /*slammy is a collection */
            if(imageUpload == null){return;}
            await addDoc(collection(db, "slammy"), {
              product: product,
              price: price,
            });

          }
          return(
            <div>
            <h2>Add Products</h2>
            <Form class="product-info">
              Select picture
    <input type="file" onChange={
  (imageUpload) => {
    setImageUpload(imageUpload.target.files[0]);
    }}/>
    <Form.Group className="mb-3" controlId="name">
      <Form.Control type="text" value={product} onChange={(product) => {
            setProduct(product.target.value);
          }} placeholder="product name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
      <Form.Control type="number" value={price} onChange={(price) => {
            setPrice(price.target.value);
          }} placeholder="price in dollars" />
      </Form.Group>
      <Button variant='secondary' onClick={Lick}>Add Product</Button>
      </Form>
              </div>
            );
        }
       
      
      export default AdminHome;
      