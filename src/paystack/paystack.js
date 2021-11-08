import React from 'react'
import { PaystackButton } from 'react-paystack'
const Paystack = ({totalAmount, status, updateVote, Email}) => {
    const publicKey = "pk_live_66f816e66ebecf5a3511d8b59192ddb773175dca"
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
