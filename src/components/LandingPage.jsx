import React from 'react'

const LandingPage = ({src}) => {
    return (
        <div className="h-100 landing" >
            <img src={"img/"+src} width="100%"/>
        </div>
    )
}

export default LandingPage
