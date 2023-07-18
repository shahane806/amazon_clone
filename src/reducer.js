export const initialState = {
  basket: [],
  user:'',
};

export const getSubtotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD":
      return {
        ...state,
        basket: [
          ...state.basket,
          {
            id: action.id,
            title: action.title,
            image: action.image,
            price: action.price,
            rating: action.rating,
          },
        ],
      };
    case "EMPTYBASKET":
      
      return {
        ...state,
        basket:action.basket,
      }
    case "REMOVE":
        const index = state.basket.findIndex((item)=>
          item.id === action.id
        );
        const newBasket = [...state.basket];
        if(index>=0){
          newBasket.splice(index,1);

        }
        else
        {
          console.warn("Object is not in cart");
        }
        return {
          ...state,
          basket:newBasket,
        }
     case "ADDUSER":{
        return {
          ...state,
          user:[
            ...state.user,action.user
          ]
        }
     }
     case "LOGOUT":{
      return {
        ...state,
        user : '',
      }
     }
     

    default:
      return state;
  }
};
