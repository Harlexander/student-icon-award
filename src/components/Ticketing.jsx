import React from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from './PdfTicket';
import { Card, Form, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Paystack from '../paystack/paystack';
import { firestore } from '../firebase/firebase';
import { useState } from 'react';
import QrCode from './qrCodeGenerator';

const Ticketing = () => {
    const [ status, setStatus ] = useState(false);
    const [visible, setVisible] = useState('');
    const [info, setInfo ] = useState({
        name : "",
        email : ""
    });

     const updateInfo = (e) => {
        const {value, name} = e.target
        setInfo((prev) => (
            {...prev,
             [name] : value
            }
        ))
    };

    const show = ( index ) => {
        setVisible( index )
    };

    const sold = ( stats ) => {
        firestore.collection("Tickets").doc(stats.ref).set({name : info.name, ref : stats.ref, type : "Icons"})
        .then(() => setStatus(stats))
        .catch((err) => {console.log(err)})

    }
    return (
        // <PDFViewer>
        //     <   MyDocument/>
        // </PDFViewer>
        <>
              <div className='about-text text-center py-5'>
                  <Fade bottom >
                     <h2 className='mb-4'>Tickets</h2>
                  </Fade>
                  <div className='row container mx-auto'>
                <Card className='col-md-4 mb-5 bg-light p-0'>
                    <Card.Img variant="bottom" onClick={() => show("2")} src="img/1.jpg" onError={(e) => {e.target.onerror = null; e.target.src = "/img/coming.jpg"}}  className=""/>
                    <Card.Body className='dropd' style={{display : visible != "2" && "none"}}>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={updateInfo} name='name' value={info.name} type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={updateInfo} name='email' value={info.email} type="email" placeholder="Email" />
                        </Form.Group>
                        </Form>
                        {!status.message && (<Paystack totalAmount={"100000"}  Email={info} sold={sold}/>)}

                        {status.message && (
                                       <> <PDFDownloadLink className='btn btn-success' document={<MyDocument refs={status.ref} price={status.price} />} fileName="myticket.pdf">
                                        {({ loading }) =>
                                            loading ? 'Loading document...' : 'Download Ticket!'
                                        }
                                    </PDFDownloadLink>
                                    <button onClick={() => window.location.reload()} className='ml-3 btn btn-info'> Buy Again!</button>
                                    </>
                        )}
                        <p className="d-block text-primary">Kindly Pay With Card Only. After payment download your Ticket to your device.</p>
                    </Card.Body>
                </Card>
                <Card className='col-md-4 mb-5 bg-light p-0'>
                    <Card.Img variant="bottom" onClick={() => show("4")} src="img/4.jpg" onError={(e) => {e.target.onerror = null; e.target.src = "/img/coming.jpg"}}  className=""/>
                    <Card.Body className='dropd' style={{display : visible != "4" && "none"}}>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={updateInfo} name='name' value={info.name} type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={updateInfo} name='email' value={info.email} type="email" placeholder="Email" />
                        </Form.Group>
                        </Form>
                        {!status.message && (<Paystack totalAmount={"500000"}  Email={info} sold={sold}/>)}
                        
                        <div>
                        {status.message && (
                                       <> <PDFDownloadLink className='btn btn-success' document={<MyDocument refs={status.ref} price={status.price} />} fileName="myticket.pdf">
                                        {({ loading }) =>
                                            loading ? 'Loading document...' : 'Download Ticket!'
                                        }
                                    </PDFDownloadLink>
                                    <button onClick={() => window.location.reload()} className='ml-3 btn btn-info'> Buy Again!</button>
                                    </>
                        )} 
                        </div>
<p className="d-block text-primary">Kindly Pay With Card Only. After payment download your Ticket to your device.</p>
                    </Card.Body>
                </Card>
                <Card className='col-md-4 mb-5 bg-light p-0'>
                    <Card.Img variant="bottom" onClick={() => show("3")} src="img/2.jpg" onError={(e) => {e.target.onerror = null; e.target.src = "/img/coming.jpg"}}  className=""/>
                    <Card.Body className='dropd' style={{display : visible != "3" && "none"}}>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={updateInfo} name='name' value={info.name} type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={updateInfo} name='email' value={info.email} type="email" placeholder="Email" />
                        </Form.Group>
                        </Form>
                        {!status.message && (<Paystack totalAmount={"5000000"}  Email={info} sold={sold}/>)}

                        {status.message && (
                                       <> <PDFDownloadLink className='btn btn-success' document={<MyDocument refs={status.ref} price={status.price} />} fileName="myticket.pdf">
                                        {({ loading }) =>
                                            loading ? 'Loading document...' : 'Download Ticket!'
                                        }
                                    </PDFDownloadLink>
                                    <button onClick={() => window.location.reload()} className='ml-3 btn btn-info'> Buy Again!</button>
                                    </>
                        )}

<p className="d-block text-primary">Kindly Pay With Card Only. After payment download your Ticket to your device.</p>
                    </Card.Body>
                </Card>
                <Card className='col-md-4 mb-5 bg-light p-0'>
                    <Card.Img variant="bottom" onClick={() => show("1")} src="img/3.jpg" onError={(e) => {e.target.onerror = null; e.target.src = "/img/coming.jpg"}}  className=""/>
                    <Card.Body className='dropd' style={{display : visible != "1" && "none"}}>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={updateInfo} name='name' value={info.name} type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={updateInfo} name='email' value={info.email} type="email" placeholder="Email" />
                        </Form.Group>
                        </Form>
                        {!status.message && (<Paystack totalAmount={"10000000"}  Email={info} sold={sold}/>)}

                        {status.message && (
                                       <> <PDFDownloadLink className='btn btn-success' document={<MyDocument refs={status.ref} price={status.price} />} fileName="StudentIconAward.pdf">
                                        {({ loading }) =>
                                            loading ? 'Loading document...' : 'Download Ticket!'
                                        }
                                    </PDFDownloadLink>
                                    <button onClick={() => window.location.reload()} className='ml-3 btn btn-info'> Buy Again!</button>
                                    </>
                        )}

<p className="d-block text-primary">Kindly Pay With Card Only. After payment download your Ticket to your device.</p>
                    </Card.Body>
                </Card>
                </div>
                </div>
                <QrCode id={status.ref}/>
        </>
    )
}
  
export default Ticketing
