import React from 'react'
import { Button } from 'react-bootstrap'
import { Contact } from '../components/contact'
import LandingPage from '../components/LandingPage'
import { Navigation } from '../components/navigation'
import {PDFDownloadLink} from '@react-pdf/renderer';
import Ticketing from '../components/Ticketing'
import MyDocument from '../components/PdfTicket'

const Tickets = () => {
    return (
        <div>
            <Navigation/>
            <LandingPage src={"img/coming.jpg"}/>
            <Ticketing/>
            <PDFDownloadLink document={<MyDocument />} fileName="myticket.pdf">
                {({ loading }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
            </PDFDownloadLink>
                <Contact/>
        </div>
    )
}

export default Tickets