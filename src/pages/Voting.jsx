import React, {useEffect, useState } from 'react'
import LandingPage from '../components/LandingPage'
import Menu from '../components/Menu'
import { Navigation } from '../components/navigation'

const Voting = ({data}) => {
    return (
        <div>
            <Navigation/>
            <LandingPage src={"img/coming.jpg"}/>
            <Menu data={data}/>
        </div>
    )
}

export default Voting
