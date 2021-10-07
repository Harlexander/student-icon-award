import React, {useState, useEffect} from 'react'
import {Card,  Container, Button, Modal, ListGroup, Alert} from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom';
import {firestore, fb} from '../firebase/firebase'
function Contestant({list}) {
    const [show, setShow] = useState(false);
    const [contestant, setContestant] = useState({});
    const [highest, setHighest] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (details) => {
        setShow(true)
        setContestant(details)
    };
    const [number_of_votes, setNumber_of_votes] =  useState(1)
    console.log(contestant)
    const updateVote = (e) => {
        const value = e.target.value
        setNumber_of_votes(value)
        setContestant((prev) => (
            {...prev,
             votes : value,
             total : value*50}
        ))
    }
    const updateEmail = (e) => {
        const value = e.target.value
        setNumber_of_votes(value)
        setContestant((prev) => (
            {...prev,
             email : value
            }
        ))
    }
    useEffect(() => {
        const id = window.location.pathname.replace(/-/g, " ").split("/")[2]
        firestore.collection("test1").doc(id).get()
        .then((doc) => {
            let value = doc.data()
            let name = Object.keys(value).reduce((a, b) => value[a] > value[b] ? a : b)
            setHighest(name)
         })
            
    }, [])
    const {url} = useRouteMatch()
    const currentPerson = url.split("/")[2].replace(/-/g, " ")

    const data = list.find(item => item.category === currentPerson)
    const nominee = data ? data.nominees[0] :  {}
    let result = Object.entries(nominee).map(( [k, v] ) => ({ [k]: v }));
    console.log(result)
    return (
      <>
      {/* <Vote show={show} handleClose={handleClose} contestant={contestant} onChange={updateVote} onChang={updateEmail} collection={currentPerson}/> */}
    <div className="px-0 mx-0 landing">
        <div className="inner">
            <br/>
            <p className="inner-text">{currentPerson.toUpperCase()}</p>
        </div>
    </div>
   <div className="text-center py-5 bg-dark">
    <h3>Nominees</h3>
    <div className="d-flex flex-row flex-wrap justify-content-center">
    {result.map((details, index) => {
        const name = Object.keys(details)[0]
        const school = Object.values(details)[0]
            return (
                <Card style={{ width: '18rem' }} key={index} className="mx-4 mb-3">
                  <Card.Header className="p-0">
                    <img src={school.img} width="100%"/>
                    </Card.Header>
                <Card.Body>
                    <Card.Title className="text-capitalize">{name}</Card.Title>
                    <p className="text-capitalize">{school.about}</p>
                    <p>{school.institution.toUpperCase()}</p>
                    <Button variant="primary" onClick={() => handleShow({name : name})}>
                    Vote Here
                    </Button>
                </Card.Body>
                </Card>
                )
       })}
    </div>
  </div> 
  </>
  );
}

const Vote = ({show, handleClose, onChange, onChang, contestant, collection}) => {
    const [alert, setAlert] = useState({});

    const status = (state) => {
        setAlert(state)
        setTimeout(() => {
            setAlert('')
        }, 2000);
    }

    let totalVote = 0;

    const voteCount = (state, amount) => {
        const vote = amount/5000
        firestore.collection("Votes").doc(collection).set({
            [contestant.name] : fb.firestore.FieldValue.increment(vote)
        }, {merge : true})
        .then(() => {console.log("done")})
        totalVote += vote
        console.log(vote)
        setAlert(state)
        setTimeout(() => {
            setAlert('')
        }, 2000);
    }
    console.log(totalVote)
    return(
        <Modal  show={show} onHide={handleClose} animate="false" centered>
  <Modal.Header>
    <Modal.Title>Vote {contestant.name}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
      <Alert variant={alert.state} className={`d-${Object.keys(alert).length === 0 ? "none" : "block"}`}>
          {alert.data}
      </Alert>
  <div className="form-group">
      <label>Email :</label>
      <input type="email" value={contestant.email} name="email" className="form-control" onChange={onChang}/>
  </div>
    Number Of Votes
    <input type="number" value={contestant.votes} name="number_of_votes" className="form-control" onChange={onChange}/>
    <h5 className="mt-auto py-2">N<span>{contestant.total}</span></h5>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    {/* <Paystack totalAmount={contestant.total * 100}  status={status} updateVote={voteCount} Email={contestant.email}/> */}
  </Modal.Footer>
</Modal>
    )
}
export default Contestant;
