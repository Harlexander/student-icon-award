import React from 'react'
import { Container, Image} from 'react-bootstrap'
import unilodge from './../images/unilodge.jpeg'
import onwhite from "./../images/white.jpg"
import hotplatenaija from './../images/hotplatenaija.PNG'
import last from './../images/0001.jpg'

function Sponsors() {
  return (
      <Container>
          <hr/>
      <div className="d-flex flex-row flex-wrap justify-content-between px-3 ">
          <Image src={unilodge} height="120px"/>
          <Image src={onwhite} height="150px" className="my-auto"/>
          <Image src={last} height="120px" className="my-auto"/>
          <Image src={hotplatenaija} height="80px" className="my-auto"/>
      </div>
      <hr/>
      </Container>
  )}
export default Sponsors;