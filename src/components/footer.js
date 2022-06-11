import React from 'react';
import "../style.css";
import {Form} from 'react-bootstrap'
function Footer(){
return(
  <div class="footer">
<div class="newsletter">

 <div><Form>
  <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    </Form>
    <button id="subscribe">Subscribe</button>
    </div>
</div>
<div class="corporates">Home</div>
  </div>
);
}
export default Footer;