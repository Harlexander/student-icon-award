import React from 'react'
import {Slide} from 'react-reveal'
const Social = () => {
    return (
        <div>
         <div id='features' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                <h2>Social Account</h2>
                </div>
                <div className='row'>
                    <Slide left>
                    <div className='col-xs-6 col-md-3'>
                    {' '}
                    <i className="fa fa-facebook"></i>
                    <h3>@StudentIconAward</h3>
                    </div>
                    </Slide>
                    <Slide top>
                    <div className='col-xs-6 col-md-3'>
                    {' '}
                    <i className="fa fa-twitter"></i>
                    <h3>@StudentIconAward</h3>
                    </div>
                    
                    </Slide>
                    <Slide bottom>
                    <div className='col-xs-6 col-md-3'>
                    {' '}
                    <i className="fa fa-instagram"></i>
                    <h3>@StudentIconAward</h3>
                    </div>
                    
                    </Slide>
                    <Slide right>
                    <div className='col-xs-6 col-md-3'>
                    {' '}
                    <i className="fa fa-hashtag"></i>
                    <h3>#StudentIconAward</h3>
                    </div>
               
                    </Slide>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Social
