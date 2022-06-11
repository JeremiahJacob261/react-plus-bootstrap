import React ,{useState} from 'react';
import "../style.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash ,faSquare} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Collapse} from 'react-bootstrap';
function Header(){
  const [open, setOpen] = useState(false);

  return(
    <div>
    <div class="mainHeader">
    <FontAwesomeIcon icon= {faCartShopping} id="cart"/>
  <div class="pages">
   <Link to="/" ><div class="tnk">Home</div></Link> 
   <Link to="Products" ><div class="tnk">Products</div></Link> 
   <Link to="Academy"><div  class="tnk">Academy</div></Link>  
   <Link to="Prints" ><div class="tnk">Buy Prints</div></Link> 
   <Link to="Contact" ><div class="tnk">Contact</div></Link> 
  </div>
  <FontAwesomeIcon icon= {faSearch} id="cart"/>
  <span class="material-symbols-outlined"  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
menu
</span>

    </div>
    <Collapse in={open}>
        <div id="example-collapse-text">
        <Link to="/" ><div class="tnv">Home</div></Link> 
   <Link to="Products" ><div class="tnv">Products</div></Link> 
   <Link to="Academy"><div  class="tnv">Academy</div></Link>  
   <Link to="Prints" ><div class="tnv">Buy Prints</div></Link> 
   <Link to="Contact" ><div class="tnv">Contact</div></Link> 
        </div>
      </Collapse>
</div>
  );

}
export default Header;