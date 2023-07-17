import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { getSubtotal } from './reducer';
import { useStateValue } from './StateProvider';
import instance from './MyAxios';
import { Mode } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { db1, db2 } from './firebase';
import { collection } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore"; 
function Payment() {
    const stripe =  useStripe();
    const navigate = useNavigate();
    const elements = useElements();
    const [error,setError] = useState(null);
    const [disabled,setDisable] = useState(true);
    const [succeseed,setSucceseed] = useState(false);
    const [processing,setProcessing] = useState("");
    const [{basket , user}, dispatch] = useStateValue();
    const [myClientSecret,setClientScret] = useState("");
    useEffect(()=>{
            const getClientScret = async () =>{
              const response=await instance({
                    
                    method:'post',
                    url:`/payments/create?total=${getSubtotal(basket)*100}`,
                    
                });
                setClientScret(response.data.clientSeceret)
           
                console.log(response.data.clientSeceret)
            }
            getClientScret();
           
    },[basket])
    
    const handleSubmit = async (e)=>{
         e.preventDefault();
         setProcessing(true);
         console.log("submit")
         basket.forEach(element => {
            dispatch({
                type:"ADDRECENTORDER",
                recentOrders:{
                    id: element.id,
                    title: element.title,
                    image: element.image,
                    price: element.price,
                    rating: element.rating
                },
            })});

         const payload = await stripe.confirmCardPayment(myClientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        
         }).then(({paymentIntent}) =>{
            setSucceseed(true);
            setError(null);
            setProcessing(false);
            navigate("/Orders")
           
            });
            
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
            <p>{user? user[0].email:localStorage.getItem("Profile")}</p>
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

       
<form onSubmit={handleSubmit} >

          <pre>Use 4242 4242 4242 4242                 04/24    242  42424</pre>
          <pre>for demo don't use other...</pre>
          <br></br>
          <br></br>
          <br></br>
          <CardElement onChange={handleChange}/>
          <div className='paymentPriceContainer'>
          <div className='CardTitle'><h3>Order Total : ₹{getSubtotal(basket)}</h3></div>

          </div>
          <button type='submit'disabled={processing&&disabled}>{processing ? <p>Processing</p>:<p>Pay</p>}</button>
          </form>

        </div>
        {error && <div>{error}</div>}
        </div>
    </div>
    </>
  )
}

export default Payment