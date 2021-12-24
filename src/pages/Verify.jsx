import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';
import { Navigation } from '../components/navigation';
import { firestore } from '../firebase/firebase';
import Loader from 'react-loader-spinner'
const Verify = () => {
    const {url} = useRouteMatch();
    const [message, setMessage] = useState("Loading")
    const id = (url.split("/").reverse()[0])
    useEffect(() => {
       

        firestore.collection("Tickets").doc(id).get()
        .then((doc) => {doc.data().used ? setMessage("Ticket already Used") : firestore.collection("Tickets").doc(id).update({used : true})
        .then(() => {setMessage("Success")})})
        .catch((err) => {setMessage("Invalid")})
    }, [])
    return (
        <div>
        <Navigation/>
            <Container className='justify-content-center py-5'>
                {message == "Loading" &&  <Loader
                    className='my-5'
                    type='TailSpin'
                    color="#00BFFF"
                    height={300}
                    width={300}
                />}
                {message == "Success" && 
                <>
                <img src={"https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/success-24.png"} className='img-fluid my-5'/>
                <p className='font-weight-bold'>Ticket Verified</p> 
                </> }
                {message == "Invalid" &&
                <>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbhk9rEu6__ssrd1PtlG7vU6avB5NP3ePWA&usqp=CAU"} className='img-fluid my-5'/>
                <p className='font-weight-bold'>Invalid Ticket</p>
                </> }
                {message == "Ticket already Used" && 
                <>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUG9Xv8p4IgbF9Ln3uyrFAlVZoJTU34Q4yIA&usqp=CAU"} className='img-fluid my-5'/>
                <p className='font-weight-bold'>Ticket Already Used</p>
                </>}
                
            </Container>
            
        </div>
    )
}

export default Verify
