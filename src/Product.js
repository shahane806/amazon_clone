import "./Product.css";
import {useStateValue} from './StateProvider';
function Product({ id,title, image, price, rating }) {
  const[{basket},dispatch] = useStateValue();
  console.log(basket)
  const handleAddToBasket = () =>{
    dispatch({
      type:"ADD",
      id:id,
      title:title,
      image:image,
      price:price,
      rating:rating,
    })
  }
  
    
   
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
      </div>
      <div className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </div>
      <div className="product__rating">
        {
          Array(rating).fill().map((_,i)=>{return <p key={i}>⭐</p>})
          
        }
      </div>
      <img src={image} alt="images"></img>
      <button onClick={handleAddToBasket}>Add to Cart</button>
    </div>
  );
}


export default Product;
