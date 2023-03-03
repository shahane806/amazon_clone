import "./Checkout.css";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getSubtotal } from "./reducer";


function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">

      <div className="checkout__left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="ad"
          />
        </Link>
       
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        <div className="checkoutproducts">
       
       
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
      <div className="checkout__right">
     
        <Subtotal value={getSubtotal(basket)}/>
        
      </div>
      
    </div>
  );
}

export default Checkout;
