import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
function Payment() {
    const [{basket , user}, dispatch] = useStateValue();
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
        </div>
    </div>
    </>
  )
}

export default Payment