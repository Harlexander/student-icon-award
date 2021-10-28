import React from 'react'
import Category from './Category'
import { Contact } from './contact'

const Menu = ({data}) => {
    return (
        <div>
           <div className="container-fluid text-center py-5 px-5 my-5">
            <div className="py-4">
            <h2>VOTING</h2>
            <p>Select the categoty of your favourite contestants. And start Voting.</p>                
            </div>
            {
                <h3> Voting Starts Soon</h3>
            }
            {/* <Category data={data}/> */}
        </div>
        <Contact/> 
        </div>
        

    )
}

export default Menu

const categories = [ 
    
]
