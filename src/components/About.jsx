import React from 'react'
import { Fade } from 'react-reveal'

const About = () => {
    return (
        <div id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              {' '}
              <Fade left>
              <img src='img/coming.jpeg' className='img-fluid' alt='' />{' '}
              </Fade>
            </div>
            <div className='col-xs-12 col-md-6'>
              <div className='about-text text-left'>
                  <Fade top>
                     <h2>About Us</h2>
                <div className='list-style row text-left px-2'>
                    <p>Over the years, thousands of Nigerian students have been doing great works in our Tertiary Institutions. Helping make life better for themselves and other university students across the country.<br/><br/>Students icon awards is here to award great Nigerian students and appreciate them for the courage and works they've put out in their various Tertiary Institutions.<br/><br/>We are currently going to be covering schools in Edo state, Nigeria. And as time goes by, we'd be covering schools across the country(NIGERIA).</p>
                  <div className='col-6'>
                    <ul>
                      <li>UNIBEN</li>
                      <li>AAU</li>
                      <li>WU</li>
                      <li>IUO</li>
                      <li>BIU</li>
                    </ul>
                  </div>
                  <div className='col-6'>
                  <ul>
                      <li>AUCHI</li>
                      <li>EDSU</li>
                      <li>C.O.E</li>
                    </ul>
                  </div>
                </div>
                  </Fade>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About


