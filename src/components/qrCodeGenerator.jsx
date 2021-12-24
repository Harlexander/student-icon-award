import React from 'react'
import QRCode from "qrcode.react";

const QrCode = ({id}) => {

    return (
        <QRCode style={{display : "none"}} value={`https://www.studenticonaward.com/verify/${id}`} id='rttrtr'/>
    )
}

export default QrCode
