import React from 'react'
import { Contact } from '../components/contact'
import Contestant from '../components/Contestant'
import LandingPage from '../components/LandingPage'
import { Navigation } from '../components/navigation'

const Contestants = ({list}) => {
    return (
        <div>
            <Navigation/>
            <LandingPage src={"coming.jpeg"}/>
            <Contestant list={list}/>
            <Contact/>
        </div>
    )
}

export default Contestants
