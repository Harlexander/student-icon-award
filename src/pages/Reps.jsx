import React from 'react'
import LandingPage from '../components/LandingPage'
import { Navigation } from '../components/navigation'
import { AllReps } from '../components/Representatives'

const Reps = () => {
    return (
        <div>
            <Navigation/>
            <LandingPage src={"coming.jpeg"}/>
            <AllReps/>
        </div>
    )
}

export default Reps
