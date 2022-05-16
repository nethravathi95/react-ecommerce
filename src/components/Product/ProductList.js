import { Fragment } from "react";

import Product from '../../components/Product/Product';

// const DUMMY_PRODUCTS = [
// 	{
// 	  id: 'p1',
// 	  price: 6,
// 	  title: 'My First Book',
// 	  description: 'The first book I ever wrote',
// 	},
// 	{
// 	  id: 'p2',
// 	  price: 5,
// 	  title: 'My Second Book',
// 	  description: 'The second book I ever wrote',
// 	},
//   ];

const ProductList = (props) =>{

	// console.log(props + 'from productsList');
	
    return (
        <Fragment>
            {/* product section */}
	{/* <div className="product-section mt-150 mb-150">
		<div className="container"> */}
			{/* <div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Our</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div> */}

			<div className="row">
         
          
		  {props.products.slice(0, 3).map((product) => ( // slice used to show limited data 
			<Product
			  key={product.id}
			  id={product.id}
			  nid={product.nid}
			  title={product.title}
			  price={product.price}
			  description={product.description}
			  image={product.image}
			/>
		  ))}
          
         
			</div>
			
		{/* </div> */}
	{/* </div> */}
	{/* end  product section */}
        </Fragment>
    );

}

export default ProductList;