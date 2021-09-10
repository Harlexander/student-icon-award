import React, { useEffect, useState} from 'react'
import { Alert } from 'react-bootstrap';
import {firestore, fb} from './../firebase/firebase'


const AddContestant = () => {
    const [state, setState] = useState({
        name : "",
        school : " ",
        category : ''
    });
    const addContestant = (e) => {
        e.preventDefault()
        firestore.collection("Contestants").doc(state.category.toUpperCase()).set({
            [state.name.toUpperCase()] :  state.school}, {merge : true})
                .then(window.alert("added suceesfully"))
     }
    const handlechanges = (e) => {
        const {name, value}  = e.target
        setState(prev =>( {
            ...prev,
            [name] : value
        }))
     }
    console.log(state)
  //function to check for current plan and set limit
    return (
        <div className="px-3">
        <div className="section pt-5">
            <h5>Add Contestant + </h5>
        </div>
        <form onSubmit={addContestant} className="mx-md-5">
            <div className="form-group py-3">
                <label>Contestant Name</label>
                <input type="text" required name="name" className="form-control " value={state.name}  style={rad} onChange={handlechanges}/>
            </div>
            <div className="form-group py-3">
                <label>Contestant Institution</label>
                <input type="text" required name="school" className="form-control " value={state.school}  style={rad} onChange={handlechanges}/>
            </div>
            {/* <div className="form-group">
                <label>Features</label>
                <div className="container p-1 bg-light shadow-lg mb-3 rounded">
              {inputs.map((items,index) => (
                    <div className="input-group my-2 w-75 mx-auto" key={index}>
                    <input type="text"style={rad} className="form-control bg-light shadow" name="feature" value={items.feature} onChange={(e) => handlechange(e, index)}/>
                   { inputs.length !== 1 && <div className="input-group-prepend px-2">
                        <button type="button" className="btn btn-danger rounded-circle fas fa-trash shadow" onClick={() => removeItem(index)}></button>
                    </div>} 
                    </div> 
              ))}
              <button className="btn rounded btn-success px-md-5 m-4" onClick={(event)=> addInput(event)}>Add New features</button>
           </div>
           </div> */}
             <div className="row my-3">
            <div className="form-group">
                <label>Category</label>
                <input type="text" required value={state.category} name="category" className="form-control" onChange={handlechanges} style={rad} />
            </div>
            </div>
             {/* <div className="row my-3">
            <div className="form-group  col-md-6">
                <label>Contestant image</label>
                <input required type="file" accept="image/png, image/gif, image/jpeg, image/jfif" name="img" onChange={addContestantImg} />
                <small className="d-block">Kindly crop image properly preferably to a square shape before uploading for better view</small>
            </div>
            </div> */}
            <input  type="submit" className="btn btn-outline-primary my-4 p-2 w-100 "/>
        </form>
           </div>
    )
}
const rad = {
    borderRadius : "20px"
}

export default AddContestant