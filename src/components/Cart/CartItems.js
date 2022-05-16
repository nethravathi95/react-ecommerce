import { Fragment, useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItemDropAdd from "./CartItemDropAdd";

const CartItems = (props) =>{
    const cartCtx = useContext(CartContext);
    
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
      };
      const cartAllItemRemoveHandler = (id) => {
        cartCtx.removeAllItem(id);
        // console.log(id);
      };
     
  
    return(
        <Fragment>

        {/* <div className="dropdown"> */}
          {/* <div className="dropdown-menu dropdown-menu-right"> */}
          {cartCtx.items.map((item) => (
                    <CartItemDropAdd
                    key={item.id}
                    nid={item.nid}
                    title={item.title}
                    amount={item.amount}
                    price={item.price}
                    image={item.image}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemoveAll={cartAllItemRemoveHandler.bind(null,item.id)}
                    />
                ))}
           {/* </div> */}
        {/* </div> */}
           
      
         
        </Fragment>
    );
}

export default CartItems;