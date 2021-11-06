import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {Slide } from 'react-reveal'
import { Link } from 'react-router-dom'

const Category = ({data}) => {
    return (
        <div className="row">
         {data.map(({category}) => (
                        <Slide bottom>
            <div className="col-md-3 p-2">
            <Card>
            <Card.Img variant="bottom" src="img/home.jpeg" onError={(e) => {e.target.onerror = null; e.target.src = "/img/coming.jpg"}}  className="w-100 img-fluid"/>
            <Card.Body>
                <Card.Title>{category.toUpperCase()}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link to={`/cate/${category.replace(/ /g, "-")}`}><Button variant="primary">View Contestants</Button></Link>
            </Card.Body>
            </Card>
            </div>
            </Slide>
        ))}
        </div>
    )
}

export default Category
