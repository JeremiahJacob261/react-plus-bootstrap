import React from 'react';
import {db}from '../components/firebase-config'
import {render} from 'react-dom';
import {} from 'react-bootstrap';
import { collection, addDoc , doc, setDoc } from "firebase/firestore";
      class AdminLogin extends React.Component{
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
          return
          (
            <div>
              
            </div>
          );
        }
      }