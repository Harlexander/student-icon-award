import React from 'react'
import { Card, div, Row, Col, Container } from 'react-bootstrap'


const reps = [
    {
        name : "Egbekunle Israel",
        img : "/reps/Egbekunle Israel.jpg",
        school : "",
    },
    {
        name : "Elizabeth Esievo",
        img : "/reps/Elizabeth.jpg",
        school : "IOU",
    },
    {
        name : "Faith",
        img : "/reps/faith.jpg",
        school : "uniben",
    },
    {
        name : "Joy moses        ",
        img : "/reps/Joy.jpg",
        school : "wellspring",
    },
    {
        name : "Jewel Idehen",
        img : "/reps/Jewel.jpg",
        school : "usen",
    },
    {
        name : "favour ogwa",
        img : "/reps/favour ogwa.jpg",
        school : "wellspring university",
    },
    {
        name : "Ansa Joshua",
        img : "/reps/Ansa.jpg",
        school : "biu",
    },
    {
        name : "COMR. JOSEPH .O.  OPEYEMI",
        img : "/reps/JOSEPH .O.  OPEYEMI.jpg",
        school : "Edo State Poly",
    },
    {
        name : "Ugbodaga Angela",
        img : "/reps/Ugbodaga.jpg",
        school : "Auchi",
    },
    {
        name : "Sharon Eimiana",
        img : "/reps/Sharon Eimiana.jpg",
        school : "BIU",
    },
    {
        name : "Oseghale Ezra",
        img : "/reps/Oseghale.jpg",
        school : "UNIBEN",
    },
    {
        name : "Omoghene Timothy Paradise",
        img : "/reps/Omoghene Timothy.jpg",
        school : "AUCHI POLY",
    },
    {
        name : "Thompson Jotham O.",
        img : "/reps/Thompson Jotham O..jpg",
        school : "AAU",
    },
    {
        name : "Oluchi",
        img : "/reps/Oluchi.jpg",
        school : "WELLSPRING UNI",
    },
    {
        name : "Ikhile John",
        img : "/reps/Ikhile John.jpg",
        school : "EDO STATE UNIVERSITY",
    },
    {
        name : "EDO DAVID OBOKPARO",
        img : "/reps/EDO DAVID OBOKPARO.jpg",
        school : "BIU",
    },
    {
        name : "Ohikhueme Olasunkanmi O.",
        img : "/reps/OHIKHUEME OLASUNKANMI O..jpg",
        school : "AAU",
    },
    {
        name : "Agunodi Goodluck",
        img : "/reps/Agunodi Goodluck.jpg",
        school : "AUCHI POLY",
    },
    {
        name : "ERA",
        img : "/reps/ERA.jpg",
        school : "EDO STATE UUNIVERSITY",
    },
]
const Representatives = () => {
    return (
        <div className="container-fluid my-5">
                <div className='section-title'>
                <h2>MEET OUR AMBASSADORS</h2>
                </div>

                <div className="container">
                    <img src="/reps/reps.png" className="img-fluid"/>
                </div>
                <div className="container py-5">
                    <button className="btn meet">Meet Them <i className="fa fa-arrow-right"></i></button>
                </div>
        </div>
    )
}
export default Representatives

export const AllReps = () => {

    return(
        <>
                <div className="container-fluid">
                <div className='section-title'>
                <h2 className="pt-5">MEET OUR AMBASSADORS</h2>
                </div>
            <Container>
            <Row>
                    {
                        reps.map(({name, img, school}) => (
                        <div className="col-md-3  position-relative">
                            <div className="mx-sm-2 m-1">
                              <img src={img} height="320px" width="250px"/>
                            <div className="overlay d-flex align-items-center justify-content-center">
                                <div className="my-auto text-white">
                                <p style={{fontSize : "25px", fontWeight : "500", letterSpacing : "0.15em"}}>{name.toLocaleUpperCase()}</p>
                                <p style={{fontSize : "15px", fontWeight : "500", letterSpacing : "0.15em"}}><i className="fa fa-map-marker"></i> {school.toLocaleUpperCase()}</p>
                            </div>

                                </div>  
                                </div>
                            </div>               
                        ))
                    }
                   </Row>
            </Container>
        </div>
        </>
    )
}
