import React from 'react'
import { Card, div, Row, Col, Container } from 'react-bootstrap'
import { Slide, Zoom } from 'react-reveal'
import { Link } from 'react-router-dom'


const reps = [
    {
        name : "Egbekunle Israel",
        img : "/reps/Egbekunle Israel.jpg",
        school : "",
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
        name : "Agunodi Goodluck",
        img : "/reps/Alaere.jpg",
        school : "AUCHI POLY",
    },
    {
        name : "Agunodi Goodluck",
        img : "/reps/Bassey.jpg",
        school : "AUCHI POLY",
    },
    {
        name : "Agunodi Goodluck",
        img : "/reps/Erinsaken.jpg",
        school : "AUCHI POLY",
    },
    {
        name : "Agunodi Goodluck",
        img : "/reps/Joyce.jpg",
        school : "AUCHI POLY",
    },
    {
        name : "Agunodi Goodluck",
        img : "/reps/Oluchi.jpg",
        school : "AUCHI POLY",
    },
    {
        name : "Agunodi Goodluck",
        img : "/reps/Ugbodaga.jpg",
        school : "AUCHI POLY",
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
                <Zoom bottom>
                <div className="container">
                    <img src="/reps/reps.jpg" className="img-fluid"/>
                </div>                    
                </Zoom>
                <Slide left>
                <div className="container py-5">
                    <Link to="/representatives">
                    <button className="btn meet">Meet Them <i className="fa fa-arrow-right"></i></button>    
                    </Link>
                </div>
                </Slide>

        </div>
    )
}
export default Representatives

export const AllReps = () => {
    const cache = {};

    function importAll(r) {
        r.keys().forEach((key) => (cache[key] = r(key)));
    }
    // Note from the docs -> Warning: The arguments passed to require.context must be literals!
    importAll(require.context("../../public/reps", false, /\.(png|jpe?g|svg)$/));
    
    const IMAGE = Object.entries(cache).map(module => module[1].default);
    return(
        <>
                <div className="container-fluid">
                <div className='section-title'>
                <h2 className="pt-5">MEET OUR AMBASSADORS</h2>
                </div>
            <Container>
            <Row>
                    {
                        reps.map(({img}) => (
                        <Slide bottom>
                         <div className="col-md-3  position-relative">
                             <div className="reps">
                              <img src={img} className="img-fluid"/>
                             </div>
                        </div> 
                        </Slide>
                               
                        ))
                    }
                   </Row>
            </Container>
        </div>
        </>
    )
}
