
import { Fragment ,useEffect,useContext} from "react";
import CommonHeader from "../Header/CommonHeader";
import { useParams ,Route,Link,useRouteMatch} from 'react-router-dom';
import AllProducts from "./AllProducts";
import {getSingleProduct} from '../../lib/api';
import useHttp from '../../hooks/use-http';
import NotFound from '../NotFound';
import CartContext from '../../store/cart-context';
import ProductItemForm from '../Product/ProductItemForm';

const Shop = (props) =>{
	
    return (
        <Fragment>
            <CommonHeader title="shop" desc="FRESH AND ORGANIC"></CommonHeader>
           	<div className="product-section mt-150 mb-150">
		<div className="container">

			<div className="row">
                <div className="col-md-12">
                    <div className="product-filters">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".strawberry">Strawberry</li>
                            <li data-filter=".berry">Berry</li>
                            <li data-filter=".lemon">Lemon</li>
                        </ul>
                    </div>
                </div>
            </div>

			<div className="row product-lists">
                <AllProducts/>
				
			</div>

			<div className="row">
				<div className="col-lg-12 text-center">
					<div className="pagination-wrap">
						<ul>
							<li><a href="#">Prev</a></li>
							<li><a href="#">1</a></li>
							<li><a className="active" href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">Next</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
        </Fragment>
    );
}

export default Shop;