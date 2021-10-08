import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
const Countdown = () => {
    const [state, setState] = useState({
        days : 0,
        hours  : 0,
        minutes : 0,
        seconds : 0
    });

    const UpdateTimer = () => {
        const countDownDate = new Date("Jan 29, 2022 2:00:00").getTime();

            const currentDate = new Date().getTime();
            const diff = countDownDate - currentDate;
     
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hrs = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let mins = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
            let sec = Math.floor(diff % (1000 * 60) / (1000));

        setState({
            days : days,
            hours  : hrs,
            minutes : mins,
            seconds : sec
        });
    }

    useEffect(() => {
        setInterval(() => {
            UpdateTimer();
        }, 1000);
    }, []);

    return (
        <div className="container-fluid colored-bg ">
            <Fade top>
              <h2>COUNTDOWN</h2>  
            </Fade>
        <br/>
        <div className="container px-0 d-flex justify-content-around text-center">
            <Fade left>
            <div style={{backgroundColor : "#333"}}className="shadow jumbotron text-white shadow p-3 ">
                <span className="countdown-unit d-block">{state.days}</span>
                <span>Days</span>
            </div>
            <div style={{backgroundColor : "#333"}}className="shadow jumbotron text-white shadow p-3">
                <span className="countdown-unit d-block">{state.hours}</span>
                <span>Hours</span>
            </div>
            <div style={{backgroundColor : "#333"}}className="shadow jumbotron text-white shadow p-3">
                <span className="countdown-unit d-block">{state.minutes}</span>
                <span>Minutes</span>
            </div>
            <div style={{backgroundColor : "#333"}}className="shadow jumbotron text-white shadow p-3">
                <span className="countdown-unit d-block">{state.seconds}</span>
                <span>Seconds</span>
            </div>
            </Fade>
        </div>
        </div>
        )
}

export default Countdown