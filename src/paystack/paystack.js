import React from 'react'
import { PaystackButton } from 'react-paystack'
const Paystack = ({totalAmount, status, updateVote, Email}) => {
    const publicKey = "pk_test_d3feafaa0a84adb4b02beaadd9b83f785d8c776d"
    const amount = totalAmount
    const email = Email

    const componentProps = {
        email,
        amount,
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
        updateVote({
            state : "success",
            data : "Your Vote(s) As Been Recorded. Thank You!!!"
        }, amount)
        ,
        onClose: () => status({
            state : "danger",
            data : "Your Vote Was Unsuccessful. Try Again!!!"
        }),
      }
    return (
        <PaystackButton className="paystack-button btn btn-primary float-right fab fa-paystack"  {...componentProps}/>
    )
}

export default Paystack
