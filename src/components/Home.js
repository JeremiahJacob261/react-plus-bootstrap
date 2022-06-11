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
 <Button variant="warning">Warning</Button>
 <Alert variant="primary">HOLA!!!</Alert>
</div>
);
}
}
export default Home;