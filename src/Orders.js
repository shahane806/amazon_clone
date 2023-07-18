import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider'
import './CheckoutProduct.css'
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "./firebase";
import moment from 'moment';
const Orders = ({id,title,price,date,image,rating}) => {
  const[{basket,user},dispatch]= useStateValue();
  const[data,setdata] = useState([]);
  const[snap,setsnap] = useState(null);
  const[count,setcount] = useState(0);
  const uid = user[0]?.uid;

   useEffect(()=>{
    onValue(ref(db, 'users/'+uid), (snapshot) => {

      snapshot.forEach((childSnapshot) => {
        setsnap(snapshot);
        const parentkey = snapshot.key;
        if(user[0]?.uid===parentkey){
           
             if(childSnapshot.exists())(
              setcount(count+1)
             )
        }
      });
    }, {
      onlyOnce: true
    });
    onValue(ref(db, 'users/'+uid), (snapshot) => {

      snapshot.forEach((childSnapshot) => {
        setsnap(snapshot);
        const parentkey = snapshot.key;
        if(user[0]?.uid===parentkey){
           
             if(data.length<=count)(
              data.push(childSnapshot.val())
             )
        }
      });
    }, {
      onlyOnce: true
    });
   },[])
 
 console.log(data) 
useEffect(()=>{
  
dispatch({
  type:"EMPTYBASKET",basket:[],
})
},[dispatch])
    


    return (
    <>
     {
      
      !uid?<div><h1>No Item Purchase</h1></div>:data.map((item,index)=>{
        return <div key={index}>
          <div className="checkout__product">
      <div className='details'>
      <div className="checkout__product__info">
        <p>{item.id}</p>
        <p>{item.title}</p>
      </div>
      <div className="checkout__product__price">
        <small>₹</small>
        <strong>{item.price}</strong>
      </div>
      <div className="checkout__product__rating">
        {
          Array(item.rating).fill().map((_,i)=>{return <p key={i}>⭐</p>})
          
        }
        
      </div> 
    </div>

      <img className='checkout__product__image' src={item.image} alt="images"></img>

      </div>
        </div>
      })
     }
    </>
  )
}

export default Orders
