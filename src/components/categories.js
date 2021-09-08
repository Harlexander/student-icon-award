import React from 'react'
import {Card,  Container, Button, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Categories({list}) {
  
  return (
  <div className="text-center py-5 bg-dark mx-0">
    <h3>Categories</h3>
    <div className="py-4">
<div className="py-4">
    <h5 className="text-light mb-5 py-2 underline">STUDENT AWARDS</h5>
    <div className="d-flex flex-row flex-wrap justify-content-center text-center">
    {list.map(({category}, index) => {
      return (<Card key={index} style={{ width: '18rem' }} className="shadow mb-4 mx-3">
      <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>
          Vote for your {category}.
          </Card.Text>
          <Button variant="primary"><Link to={`/category/${category.replace(/ /g, "-")}`} className="text-white text-decoration-none"> View Nominees </Link></Button>
      </Card.Body>
      </Card>)
    })}
     </div>
     </div>
    </div>
  </div>
  );
}
export default Categories;
