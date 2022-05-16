

import { Fragment ,useContext } from 'react';
import { Link } from 'react-router-dom';
import CommonHeader from '../Header/CommonHeader';
import CartContext from '../../store/cart-context';
import CartBody from './CartBody';

const Cart = () =>{

	const cartCtx = useContext(CartContext);
	
	const Subtotal = cartCtx.totalAmount;
	
	let shipping = [];
	if(cartCtx.totalAmount === 0){
			// console.log(0);
			shipping = 0;
	}
	else{
		// console.log(45);
		shipping = 45;
	}
	// const Shipping = 45;
	const totalAmount = cartCtx.totalAmount + shipping;
	const hasItems = cartCtx.items.length === 0;
	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	  };
	
	  const cartItemAddHandler = (item) => {
		cartCtx.addItem(item);
	  };
	  const cartAllItemRemoveHandler = (id) => {
        cartCtx.removeAllItem(id);
        
      };

	
    return(
        <Fragment>
            <CommonHeader title='Cart' desc='FRESH AND ORGANIC'/>

            <div className="cart-section mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="cart-table-wrap">
						<table className="cart-table">
							<thead className="cart-table-head">
								<tr className="table-head-row">
									<th className="product-remove"></th>
									<th className="product-image">Product Image</th>
									<th className="product-name">Name</th>
									<th className="product-price">Price</th>
									{/* <th className="product-quantity">Quantity</th> */}
									<th className="product-total">Total</th>
								</tr>
							</thead>
							<tbody>
							{cartCtx.items.map((item) => (
								<CartBody
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
								
								{hasItems &&
								 <tr className="table-body-row"> 
								<td rowSpan="5"></td>
								
								<td rowSpan={5}><p className='p-2'>Add some items</p></td>
								</tr>}
							</tbody>
						</table>
					</div>
				</div>

				<div className="col-lg-4">
					<div className="total-section">
						<table className="total-table">
							<thead className="total-table-head">
								<tr className="table-total-row">
									<th>Total</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr className="total-data">
									<td><strong>Subtotal: </strong></td>
									<td>$ {Subtotal}</td>
								</tr>
								<tr className="total-data">
									<td><strong>Shipping: </strong></td>
									<td>$ 45</td>
								</tr>
								<tr className="total-data">
									<td><strong>Total: </strong></td>
									<td>$ {totalAmount}</td>
								</tr>
							</tbody>
						</table>
						<div className="cart-buttons">
							<Link to="/" className="boxed-btn">Shop</Link>
							<Link to="checkout" className="boxed-btn black">Check Out</Link>
						</div>
					</div>

					<div className="coupon-section">
						<h3>Apply Coupon</h3>
						<div className="coupon-form-wrap">
							<form action="/">
								<p><input type="text" placeholder="Coupon"/></p>
								<p><input type="submit" value="Apply"/></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        </Fragment>
    );
}

export default Cart;