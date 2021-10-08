import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import { database, fb, firestore } from '../firebase/firebase';

const Nominate = () => {
    const [state, setState] = useState({
        name : "",
        email : "",
        category : '',
        mobile : "",
        nomination : "",
        institution : ""
    });
    const [loading, setLoading] = useState(false)
    const Categories = [ 
        "-",
        "Best class rep of the year",
        "Student enterprenuer of the year ",
        "Student Event Of The year ",
        "Student graphic designer of the year ",
        "Best faculty of the year ",
        "Sports man of the year ",
        "Sport woman of the year ",
        "Most influential student ",
        "Programmer of the year",
        "Student Philantropist of the year",
        "Personality of the year ",
        "Most popular student of the year ",
        "Blogger of the year ",
        "Student hypeman / hype woman of the year ",
        "Music artist of the year ",
        "Comedian of the year ",
        "Student brand of the year ",
        "Most political student ",
        "Best student society of the year ",
        "Photographer of the year",
        "Student influencer of the year ",
        "Most popular student ",
        "Spoken word artist of the year ",
        "Best tertiary institution of the year",
        "Best writer of the year",
        "Student OAP of the year",
        "Dance group of the year ",
        "Most political student",
        "Activist of the year ",
        "Podcaster of the year ",
        "Media influencer of the year ",
        "Content creator of the year ",
        "MC/Compere (male)",
        "MC/Compere (female)",
        "Best student DJ"
        ]
    
        
    const handlechanges = (e) => {
        const {name, value}  = e.target
        setState(prev =>( {
            ...prev,
            [name] : value
        }))
     }
     const puhNomination = (e) => {
         setLoading(true);
         e.preventDefault();
         firestore.collection("Nomination").doc(state.category).set({
            [state.nomination] : {
                number : fb.firestore.FieldValue.increment(1),
                instititution : state.institution
            }
        }, {merge : true})
        .then(() => setState({        
        name : "",
        email : "",
        category : '',
        mobile : "",
        nomination : "",
        institution : ""
        }))
        .then(() => {setLoading(false); alert("Your Nomination Has Been Recorded!!! Thank You.")})
    }
     console.log(state)
    return (
<div id='about'>
        <div className='container'>
          <div className='row'>
              <Zoom left>
               <div className='col-xs-12 col-md-6'>
              {' '}
              <img src='img/how.jpg' className='img-fluid' alt='' />{' '}
            </div>
              </Zoom>
              <Zoom right>
                  <div className='col-xs-12 col-md-6'>
              <div className='text-left about-text'>
                <h2>Nomination</h2>
                <div className='list-style row text-left px-2'>
                    <p>Nomination will sooon begin, check the image for the minimum requirements fora contestant to be nominated. Nomination starts by <b>00:00am || 8th, Oct 2021 - 14th, Oct 2021.</b></p>
                </div>
                <Form onSubmit={puhNomination}>
                    <h4>Personal Information </h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>YOUR NAME</Form.Label>
                <Form.Control onChange={handlechanges} name="name" value={state.name} className="border-0 p-3 text-white bg-dark rounded-0" type="text" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control onChange={handlechanges} name="email" value={state.email} className="border-0 p-3 text-white bg-dark rounded-0" type="text" placeholder="Email" />
                </Form.Group>
                <h4>Nomination Information </h4>
                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Nomination Name</Form.Label>
                    <Form.Control onChange={handlechanges} name="nomination" value={state.nomination} className="border-0 p-3 text-white bg-dark rounded-0" type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Nomination Institution</Form.Label>
                    <Form.Control onChange={handlechanges} name="institution" value={state.institution} className="border-0 p-3 text-white bg-dark rounded-0" type="text" placeholder="Institution" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Nomination Category</Form.Label>
                    <select onChange={handlechanges} className="border-0 p-3 text-white bg-dark rounded-0 w-100" name="category" value={state.category} >
                       {
                           Categories.map((item, index) => (
                               <option key={index} value={item}>{item.toUpperCase()}</option>
                           ))
                       }
                    </select>
                </Form.Group>
                <Button variant="primary" className="w-100 py-4" type="submit">
                    {!loading ? "Submit" : `Loading`} <i style={{fontSize : "30px", display : `${!loading ? "none" : "inline"}`}} className='fa fa-circle-o-notch fa-spin'></i>
                </Button>
                </Form>
              </div>
            </div>
          </Zoom>
            </div>
        </div>
      </div>
    
    )
}

export default Nominate
