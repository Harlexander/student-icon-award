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
        const eventTime = moment("11 13 2021, 6 : 00 am", "MM DD YYYY, h:mm a");
        const today = moment();
        const countDownTime = moment(eventTime - today);
        setState({
            days : countDownTime.format("D"),
            hours  : countDownTime.format("HH"),
            minutes : countDownTime.format("mm"),
            seconds : countDownTime.format("ss")
        });
    }

    useEffect(() => {
        setInterval(() => {
            UpdateTimer();
        }, 1000);
    }, []);

    return (
        <div className="container-fluid py-5 colored-bg ">
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