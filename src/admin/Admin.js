import React from 'react';
import {db}from '../components/firebase-config'
import {render} from 'react-dom';
import {Form,Button} from 'react-bootstrap';
import { collection, addDoc , doc, setDoc } from "firebase/firestore";
      class AdminHome extends React.Component{
        constructor() {
          super();
          this.state = {
            name: 'React'
          };
        }
        render(){
          const Lick= async()=>{
            await addDoc(collection(db, "slammy"), {
              name: "Lagos",
              state: "Ikeja",
              country: "Nigeria"
            });

          }
          return(
            <div>
            <h2>Add Products</h2>
            <Form>
    <Form.Group className="mb-3" controlId="subscribeInput">
      <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      </Form>
              </div>
            );
        }
      }
      export default AdminHome;