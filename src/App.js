import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import SignUp from "./SignUp";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";

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
            path="Checkout"
            element={
              <>
                <Header />
                <Checkout />
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
