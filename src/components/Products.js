import React ,{useState,useEffect} from 'react';
import {render} from 'react-dom';
import {Dropdown , Container, Row ,Col,Button} from 'react-bootstrap';
import {db} from './firebase-config'
import { collection, addDoc , doc, setDoc , getDocs} from "firebase/firestore";
 

function Products(){
  const [product ,setProduct] = useState([]);
  const usersCollectionRef = collection(db, "slammy")
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setProduct(data.docs.map((pro) => ({ ...pro.data(), id: pro.id })));
    };

  
  }, []);

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
  <Button>getdata</Button>
  <Row class="product-catalog">
    <Col class="product-catalog-col">gffjvsi</Col>
    <Col>hola</Col>
  </Row>
</Container>
<div>
  {product.map((pro)=>{
    return(
      <div>
        <h2>{pro.product}</h2>
        <h2>{pro.price}</h2>
      </div>
    );
  }
 )}
</div>
    </div>
  );

}
export default Products;