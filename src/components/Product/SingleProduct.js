
import { Fragment ,useEffect,useContext} from "react";
import CommonHeader from "../Header/CommonHeader";
import { useParams ,Route,Link,useRouteMatch} from 'react-router-dom';
import AllProducts from "./AllProducts";
import {getSingleProduct} from '../../lib/api';
import useHttp from '../../hooks/use-http';
import NotFound from '../NotFound';
import CartContext from '../../store/cart-context';
import ProductItemForm from '../Product/ProductItemForm';

const SingleProducts = (props) =>{
	const cartCtx = useContext(CartContext);
	const {sendRequest , status ,data : loadedProduct,error}= useHttp(getSingleProduct,true);

	// const match = useRouteMatch();
	// console.log(match);// USED TO GET PATH
	const params = useParams();
	const {productId} = params;// use to get endpoint of path

	// console.log(productId);
	useEffect(()=>{
        sendRequest(productId);

        },[sendRequest,productId]);

        if(status === 'pending'){
                return (<div className='centered'>
                {/* <LoadingSpinner/> */}
        </div>);
        }

        if(error){
                return <p className='centered'>{error}</p>
        }

        if(!loadedProduct.nid){
                return <NotFound/>;
        }

		const addToCartHandler = amount => {
			cartCtx.addItem({
			  id: loadedProduct.nid,
			  title: loadedProduct.title,
			  amount:amount,
			  description: loadedProduct.description,
			  price: loadedProduct.price,
			  image:loadedProduct.image
			});
		  };
    return (
        <Fragment>
            <CommonHeader title={'singleProducts'} desc={'Products'}/>
            	 {/* single product */}
	<div className="single-product mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-md-5">
					<div className="single-product-img">
						<img src={loadedProduct.image} alt=""/>
					</div>
				</div>
				<div className="col-md-7">
					<div className="single-product-content">
						<h3>{loadedProduct.title}</h3>
						<p className="single-product-pricing"><span>Per Kg</span> ${loadedProduct.price}</p>
						<p>{loadedProduct.description}</p>
						<div className="single-product-form">
							{/* <form action="index.html">
								<input type="number" placeholder="0"/>
							</form> */}
							<ProductItemForm onAddToCart={addToCartHandler}/>
							{/* <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link> */}
							<p><strong>Categories: </strong>Fruits, Organic</p>
						</div>
						<h4>Share:</h4>
						<ul className="product-share">
							<li><Link to=""><i className="fab fa-facebook-f"></i></Link></li>
							<li><Link to=""><i className="fab fa-twitter"></i></Link></li>
							<li><Link to=""><i className="fab fa-google-plus-g"></i></Link></li>
							<li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* end single product */}
	<div className="more-products mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Related</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>
	{/* more products */}
	<AllProducts/>
	{/* end more products */}
	<div className="row">
				<div className="col-lg-12 text-center">
					<Link to="/shop"  exact className="boxed-btn">More Products</Link>
				</div>
			</div>
	</div>
	</div>
	
        </Fragment>
    );
}

export default SingleProducts;