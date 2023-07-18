import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { getSubtotal } from './reducer';
import { useStateValue } from './StateProvider';
import instance from './MyAxios';
import { useNavigate } from 'react-router-dom';
import { db } from './firebase';
import { getDatabase, push, ref, set } from "firebase/database";
import moment from 'moment/moment';
function Payment() {
    const stripe =  useStripe();
    const navigate = useNavigate();
    const elements = useElements();
    const [error,setError] = useState(null);
    const [disabled,setDisable] = useState(true);
    const [succeseed,setSucceseed] = useState(false);
    const [processing,setProcessing] = useState("");
  const[{basket,user},dispatch]= useStateValue();
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
           console.log(user[0]?.uid)
        function writeUserData(id, title, price, image,rating) {
            const db = getDatabase();
            const email = user[0]?.accessToken;
            const uid = user[0]?.uid;
            
            let date,month,year;
            date = new Date().getDate();
            month = new Date().getMonth() +1;
            year = new Date().getFullYear();
            let cal = date+"/"+month+"/"+year;
            push(ref(db, 'users/'+uid), {
              userId:email,
              id: id,
              title: title,
              price: price,
              image: image,
              rating: rating,
              date:cal,
            });
          }
    const handleSubmit = async (e)=>{
         e.preventDefault();
         setProcessing(true);
         
         
        
       const payload = await stripe.confirmCardPayment(myClientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        
         }).then(({paymentIntent}) =>{
            setSucceseed(true)
            setError(null);
            setProcessing(false);
           basket.map((item)=> writeUserData(item.id,item.title,item.price,item.image,item.rating))
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