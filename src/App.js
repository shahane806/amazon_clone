import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import SignUp from "./SignUp";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import Payment from "./Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from "./Orders";

const stripePromise = loadStripe('pk_test_51MhATBSDpu6MsaKXK8RVo8sWkPNIefeLTMKaLN62ZbDRsEyNic9fEKEDQ4k11jlSVxw5Z7h0WYbl6rrU4kky2rT700bCBWmzeW');

function App() {
  

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/Orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="payment"
            element={
              <>
                <Header />
                  <Elements stripe={stripePromise}>
                 <Payment />
                 </Elements>
              </>
            }
          />
          <Route  
            path = "signIn"
            element={
              <>
              <SignIn/>
              </>
            }
          
          />
          <Route  
            path = "SignUp"
            element={
              <>
              <SignUp/>
              </>
            }
          
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
