import React ,{useState,useEffect} from 'react';
import {render} from 'react-dom';
import {Dropdown , Container, Row ,Col,Button} from 'react-bootstrap';
import {db} from './firebase-config'
import { collection, addDoc , doc, setDoc , getDoc} from "firebase/firestore";
 

function Products(){
 const getDta =async()=>{
  const querySnapshot = await getDocs(collection(db, "slammy"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
 }
  return(
    <div>
    <div class="Products-div"> 
<h1>Products</h1>
</div>
<div class="filter-box">
  Filter By
<Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    All Products
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
Sort By
<Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Alphabetically A-Z
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Best Selling</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Featured </Dropdown.Item>
    <Dropdown.Item href="#/action-3">Alphabetically</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
<Container>
  <Button onClick={getDta}>getdata</Button>
  <Row class="product-catalog">
    <Col class="product-catalog-col">gffjvsi</Col>
    <Col>hola</Col>
  </Row>
</Container>

    </div>
  );

}
export default Products;