import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { getSubtotal } from './reducer';
import { useStateValue } from './StateProvider';
import axios from 'axios';
import { Navigate } from 'react-router';

function Payment() {
    const stripe =  useStripe('');
    const element = useElements('');
    const [error,setError] = useState(null);
    const [disabled,setDisable] = useState(true);
    const [succeseed,setSucceseed] = useState(false);
    const [processing,setProcessing] = useState("");
    const [{basket , user}, dispatch] = useStateValue();
    const [clientSecret,setClientScret] = useState(true);
    useEffect(()=>{
            const getClientScret = async () =>{
                const responce = await axios({
                    method:'post',
                    url:`/payments/create?Total = ${getSubtotal(basket)}`,
                })
                setClientScret(responce.data.clientSecret);
            }
            getClientScret();
    },[basket])
    const handleSubmit= async (e)=>{
         e.preventDefault();
         setProcessing(true);
         const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:element.getElement(CardElement)
            }
         }).then(({paymentIntent}) =>{
            setSucceseed(true);
            setError(null);
            setProcessing(false);
            Navigate("/orders");
         })
    }
    const handleChange =(e)=>{
        e.preventDefault();
        setDisable(e.empty);
        setError(e.error ? e.error.message : "");
    }
  return (
    <>
    <div className='PaymentPannel'>
        <div className='TotalItems'>
            <h2>
                CHECKOUT ({basket?.length} items)
            </h2>
        </div>
        <div className='PaymentAddress'> 
            <div className='PaymentAddressTitle'>
                <h3> Payment Address</h3>
            </div>
            
            <div className='PaymentAddressDisc'>
            <p>{user? user[0].email:"User"}</p>
            <p>AddressLine1</p>
            <p>AddressLine2</p>
            </div>
            
        </div>
        <div className='ProductReviews'>
            <div className='PaymentReviewsTitle'><h3>Product Reviews</h3></div>
            <div className='PaymentReviewsProducts'>
        {
          
          basket.map(item=>{
              
              return <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              />
          }) }
      </div>
        </div>
        <div className='StripePayment'>
        <div className='CardTitle'><h3>Payment Process</h3></div>
        <div className='CardElement'>

        <form onSubmit={handleSubmit}>

<CardElement onChange={handleChange}/>
          <div className='paymentPriceContainer'>
          <div className='CardTitle'><h3>Order Total : ${getSubtotal(basket)}</h3></div>

          </div>
          <button type='submit' disabled={processing || disabled || succeseed}>{processing ? <p>Processing</p>:<p>Pay</p>}</button>
          
</form>
        </div>
        {error && <div>{error}</div>}
        </div>
    </div>
    </>
  )
}

export default Payment