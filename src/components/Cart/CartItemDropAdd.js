import { Link } from 'react-router-dom';

const CartItemDropAdd = (props) => {

    // console.log(props);
   
    return (
        <Link className="dropdown-item d-flex" to="#">
        <img className="img-fluid" src={props.image} alt="item1" width={100} height={150}/>
         <ul className="list-group list-group-flush">
             <li className="list-group-item"><span>{props.title}</span>
                <span className="float-right">
                <button className="btn btn-default p-0" onClick={props.onRemove}><i className="far fa-minus-square"></i></button>
                <button className="btn btn-default  p-0" onClick={props.onAdd}><i className="far fa-plus-square"></i></button>
                <button  className="btn btn-default  p-0" onClick={props.onRemoveAll}>
                    <i className="far fa-window-close"></i>
                </button>
                </span>
            </li>
            <li className="list-group-item"><span className="item-price">$ {props.price}</span><span className="float-right border pl-2 pr-2">x {props.amount}</span></li>
         </ul>     
       </Link>
    );
}

export default CartItemDropAdd;