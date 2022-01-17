import React from 'react'
import { PaystackButton } from 'react-paystack'
const Paystack = ({totalAmount, status, sold, Email}) => {
  // const publicKey = "pk_test_d3feafaa0a84adb4b02beaadd9b83f785d8c776d"
     const publicKey = "pk_live_66f816e66ebecf5a3511d8b59192ddb773175dca"
    const amount = totalAmount
    const email = Email.email
    const metadata = {
        name : Email.name
    }

    var arr = [];
    while(arr.length < 8){
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    const unique  = arr.toString().replace(/,/g, '');

    const reference = "SIA"+ unique
    const componentProps = {
        email,
        amount,
        publicKey,
        reference,
        metadata,
        text: "Buy Ticket",
        onSuccess: ( reference ) => sold({message : true, price : (amount/100), ref : reference.reference})
  ,
        onClose: () => status({
            state : "danger",
            data : "Your purchase was unsuccessful. Try Again!!!"
        }),
      }
    return (
        <PaystackButton className="paystack-button btn btn-primary float-right fab fa-paystack"  {...componentProps}/>
    )
}

export default Paystack
