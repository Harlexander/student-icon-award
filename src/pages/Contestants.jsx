import React from 'react'
import { Contact } from '../components/contact'
import Contestant from '../components/Contestant'
import LandingPage from '../components/LandingPage'
import { Navigation } from '../components/navigation'

const Contestants = ({list}) => {
    return (
        <>
            <Navigation/>
            <LandingPage src={"../img/coming.jpg"}/>
            <Contestant list={list}/>
            <Contact/>
        </>
    )
}

export default Contestants
