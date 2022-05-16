
import { Link } from 'react-router-dom';

const CartBody = (props) =>{
    return (
        <tr className="table-body-row">
									<td className="product-remove"><Link to="#" onClick={props.onRemoveAll}><i className="far fa-window-close"></i></Link></td>
									<td className="product-image"><img src={props.image} alt={props.title}/></td>
									<td className="product-name">{props.title}</td>
									<td className="product-price">$ {props.price}</td>
									{/* <td className="product-quantity"><input type="number" placeholder="0"/></td> */}
									<td className="product-total">{props.amount}</td>
								</tr>
    );
}

export default CartBody;