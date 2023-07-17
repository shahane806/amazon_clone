import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const[{basket},dispatch] = useStateValue('');
  const[{user},userDispatch] = useStateValue('');
console.log(user)
  const logout = (e) =>{
    localStorage.clear();
      userDispatch({
        type:"LOGOUT",
        user: '',
      })
  }
  return (
    <div id="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        ></img>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>
      <SearchIcon className="header__searchIcon" />
      <div className="header__nav">
         {
          !user&&!localStorage.getItem("Profile")?  <Link to="/signIn">
          <div className="header__option">
            <span className="header_optionLineOne">Hello {user? user[0].email: "User"}</span>
           
               <span className="header_optionLineTwo">{"SignIn"}</span>
            
          </div>
          </Link> :  
        <div className="header__option">
          <span className="header_optionLineOne">Hello {user? user[0].email: localStorage.getItem("Profile")}</span>
         
             <span className="logout header_optionLineTwo" onClick={logout}>Log Out</span>
          
        </div>
       
         }
       <Link to={"/Orders"}> 
        <div className="header__option" >
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&Orders</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/Checkout" className="Checkout">
            <ShoppingBasketIcon />
          </Link>
          <span className="header_optionBasketCount">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
