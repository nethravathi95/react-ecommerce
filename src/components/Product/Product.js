import { Fragment, useContext } from "react";
import {Link } from "react-router-dom"; 
import ProductItemForm from "./ProductItemForm";
import CartContext from '../../store/cart-context';

const Product = (props) => {

	const { title, price, description, nid,image } = props;
	// var the_arr = 'http://localhost/'+image;
	// console.log(image);
	const cartCtx = useContext(CartContext);

	// console.log(props + 'from productsList');
	// const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: nid,
      title: title,
	  amount:amount,
      description: description,
      price: price,
	  image:image
    });
  };
    return (
        <Fragment>
            {/* product section */}
            <div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							{/* <Link to={`/single-product/${props.nid}`}>Link</Link> */}
							<Link to={`/single-product/${props.nid}`}><img src={image} alt=""/></Link>
						</div>
						<h3>{title}</h3>
						<p className="product-price"><span>Per Kg</span> {price} $</p>
						{/* <Link to="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"/> Add to Cart</Link> */}
					<ProductItemForm onAddToCart={addToCartHandler}/>
					</div>
				</div>
	{/* end  product section */}
        </Fragment>
    );

}

export default  Product;