import React from 'react'
import { Button } from 'react-bootstrap'
import { Contact } from '../components/contact'
import LandingPage from '../components/LandingPage'
import { Navigation } from '../components/navigation'
import Nominate from '../components/Nominate'

const Nomination = () => {
    return (
        <div>
            <Navigation/>
            <LandingPage src={"nomination.jpg"}/>
            <Nominate/>
            <Contact/>
        </div>
    )
}

export default Nomination
