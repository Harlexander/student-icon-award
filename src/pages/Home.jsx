import React from 'react'
import About from '../components/About'
import { Contact } from '../components/contact'
import Countdown from '../components/Countdown'
import LandingPage from '../components/LandingPage'
import { Navigation } from '../components/navigation'
import Social from '../components/Social'
import Zoom from 'react-reveal/Zoom'
import { Button } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import Representatives from '../components/Representatives'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
           <Navigation/> 
           <LandingPage src={"home.jpg"}/>
           <About/>
           <Countdown/>
           <NominateNav/>
           <Representatives/>
           <Social/>
           <Contact/>
        </div>
    )
}

const NominateNav = () => {
    return(
        <div className='container-fluid text-center py-5 pt-5 colored-bg'>
            <Fade top>
             <h2>NOMINATion</h2>
             <p className="text-light">Click the button below to nominate your favourite candidate in any category and shools around Edo state.</p>   
            </Fade>
            <Fade left>
                <Link to="/nomination">
                <Button variant="primary" className="p-3 rounded-0 my-3">
                 Nominate Your Candidate
             </Button>  
                </Link>
            </Fade>
        </div>
    )
}
export default Home
