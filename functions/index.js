const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE_API);

// api

//app config
const app = express();
app.use(cors({ origin : true}));
app.use(express.json());
//api middlewares

//api routes
app.get(('/'),(request,response)=> response.status(200).send('hello world'));
app.post('/payments/create',async (request,response)=>{
    const total = request.query.total;
  
    console.log("Payment Request receiver>>>",total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"INR",
    });

    response.status(201).send({
        clientSeceret:paymentIntent.client_secret,
    }); 
})
// listen command
 exports.api = functions.https.onRequest(app);
 //http://127.0.0.1:5001/clone-c47cb/us-central1/api
