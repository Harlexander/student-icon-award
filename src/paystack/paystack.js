import React from 'react'
import { PaystackButton } from 'react-paystack'
const Paystack = ({totalAmount, status, updateVote, Email}) => {
    const publicKey = "pk_live_17bb05aac2a3b65313b93e812efb0f5aa5b005e4"
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
