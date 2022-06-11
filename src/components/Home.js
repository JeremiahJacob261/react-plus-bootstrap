import React from 'react';
import "../style.css";
import {Link} from 'react-router-dom';
import { render } from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash ,faSquare} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-brands-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import  Button from 'react-bootstrap/Button';
import  Alert from 'react-bootstrap/Alert';
import  {Container,Row,Col} from 'react-bootstrap';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render(){
return(
<div class="home">
 <h2>Home</h2>
 <Container>
  <Row>
  <Col><Button variant="secondary">BUTTON</Button></Col>
  </Row>
</Container>
</div>
);
}
}
export default Home;