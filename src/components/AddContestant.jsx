import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import { firestore, storage } from '../firebase/firebase'
import { Navigation } from './navigation'

const AddContestant = () => {
    const [state, setState] = useState({
        name : "",
        institution : " ",
        category : ''
    });
    const addImage = (e) => {
        const file = e.target.files[0]
        setState(prev => ({
            ...prev, 
            img : file
        }))
    }
      const Categories = [ 
        "-",
        "Best class rep of the year",
"Student of the year",
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
        "Student hypeman or hype woman of the year ",
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
        "MC or Compere",
        "Best student DJ"
        ]
    const addContestant = (e) => {
        e.preventDefault()
        const uploadTask =  storage.ref(`contestant/${state.name}-${state.institution}`).put(state.img)
        uploadTask.on('state_changed', 
        (snapShot) => {
          console.log(snapShot)
        }, (err) => {
          //catches the errors
        }, () => {
          storage.ref("contestant").child(`${state.name}-${state.institution}`).getDownloadURL()
           .then(fireBaseUrl => {
            firestore.collection("category").doc(state.category.toUpperCase()).set({
                [state.name.toUpperCase()] :  {
                    name : state.name,
                    institution : state.institution,
                    category : state.category,
                    about : state.about,
                    img : fireBaseUrl
                }}, {merge : true})
                    .then(window.alert("added suceesfully"))
           })
        })
     }

    const handlechanges = (e) => {
        const {name, value}  = e.target
        setState(prev =>( {
            ...prev,
            [name] : value
        }))
     }
     console.log(state)
    return (
        <div>
            <Navigation/>
            <div className="container-fluid py-5 bg-light">
                <p>Add Contestant ++</p>
            </div>
            <div id='about'>
        <div className='container'>
          <div className='row'>
              <Zoom left>
               <div className='col-xs-12 col-md-6'>
              {' '}
              <img src='img/home.jpeg' className='img-fluid' alt='' />{' '}
            </div>
              </Zoom>
              <Zoom right>
                  <div className='col-xs-12 col-md-6'>
              <div className='text-left about-text'>
                <h2>Add Contestant</h2>
                <div className='list-style row text-left px-2'>
                    <p>Contestant is currently ongoing, check the image for the minimum requirements fora contestant to be nominated.</p>
                </div>
                <Form onSubmit={addContestant}>
                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Contestant Name</Form.Label>
                    <Form.Control name="name" onChange={handlechanges} value={state.name} className="border-0 p-3 text-white bg-dark rounded-0" type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Contestant Picture</Form.Label>
                    <Form.Control name="img" onChange={addImage} className="border-0 p-3 text-white bg-dark rounded-0" type="file" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Contestant Category</Form.Label>
                    <select onChange={handlechanges} className="border-0 p-3 text-white bg-dark rounded-0 w-100" name="category" value={state.category} >
                       {
                           Categories.map((item, index) => (
                               <option key={index} value={item}>{item.toUpperCase()}</option>
                           ))
                       }
                    </select>                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>About Contestant</Form.Label>
                    <Form.Control name="about" onChange={handlechanges} value={state.about} className="border-0 p-3 text-white bg-dark rounded-0" type="text" placeholder="About" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Institution</Form.Label>
                    <Form.Control name="institution" onChange={handlechanges} value={state.institution} className="border-0 p-3 text-white bg-dark rounded-0" type="text" placeholder="Institution" />
                </Form.Group>
                <Button variant="primary" className="w-100 py-4" type="submit">
                    Submit
                </Button>
                </Form>
              </div>
            </div>
          </Zoom>
            </div>
        </div>
      </div>
  
        </div>
    )
}

export default AddContestant
