import React from 'react';
import "../style.css";
import {Form,Button} from 'react-bootstrap'
function Footer(){
return(
  <div class="footer">
<div class="newsletter">

 <div><Form>
  <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Button id="subscribe" size="sm">
    Submit
  </Button>
    </Form></div>
</div>
<div class="corporates">Home</div>
  </div>
);
}
export default Footer;