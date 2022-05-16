
import { Fragment ,useEffect,useState,useRef} from "react";
import { useHistory, useLocation } from 'react-router-dom';
import CommonHeader from "../components/Header/CommonHeader";
import useHttp from "../hooks/use-http";
import {getAllProducts}  from "../lib/api";
import {Link } from "react-router-dom"; 
import Product from "../components/Product/Product";

const ShopPage = () =>{
	const [searchInput, setSearchInput] = useState('');// to search single or multiple data
	const [searchData, setSearchData] = useState('');// filter for single data
	const [filteredResults, setFilteredResults] = useState([]);// fecthing filter/serach data
	const [msg, setMsg] = useState('');// fecthing filter/serach data

	// using to push specified item to url
	const history = useHistory();
	const location = useLocation();

	//to fetch data from api 
	const {sendRequest , status ,data : loadedProducts,error} = useHttp(getAllProducts,true);
        useEffect(()=>{
        sendRequest();

        },[sendRequest]);

        if(status === 'pending'){
                return (<div className='centered'>
                {/* <LoadingSpinner/> */} <p>Loding</p>
        </div>);
        }

        if(error){
                return <p className='centered'>{error}</p>
        }

        if(status === 'completed' && (!loadedProducts || loadedProducts.length === 0)){
                // return <NoQuotesFound/>;
                return <p className='centered'>No more products</p>
        }

		const message =[];

		// search from input 
		const searchItems = (searchValue) => {
			setMsg('');
			setSearchInput(searchValue)
			// console.log(searchValue);
			history.push({
				pathname:location.pathname,
				search:`?filter=${(searchValue)}`
			})
			if (searchInput !== '') {
			const filteredData = loadedProducts.filter((item) => {
				return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
				})
				if(filteredData.length === 0){
					setMsg('Not Found');
					
				}
				setFilteredResults(filteredData);
			}
			else{
				setFilteredResults(loadedProducts);
			}
		}
		//filter from single data
		const clickSortingHandler = (filter_data) => {
			setSearchData(filter_data);
			
			history.push({
				pathname:location.pathname,
				search:`?filter=${(filter_data)}`
			})
			if(filter_data !== 'All'){
				setMsg('');
				const filteredSingleData = loadedProducts.filter((item) => item.title === filter_data);
				
				setFilteredResults(filteredSingleData);
			}
			else{
				setMsg('');
				setFilteredResults(loadedProducts);
				// console.log('All');
			}
				
		  };
    return (
        <Fragment>
            <CommonHeader title="shop" desc="FRESH AND ORGANIC"></CommonHeader>
           	<div className="product-section mt-150 mb-150">
		<div className="container">

			<div className="row">
                <div className="col-md-8">
                    <div className=" product-filters">
                        <ul>
                            <li className="active" data-filter="*" onClick={() => clickSortingHandler('All')}>All</li>
                            <li data-filter=".strawberry" onClick={() => clickSortingHandler('Strawberry')} >Strawberry</li>
                            <li data-filter=".berry" onClick={() => clickSortingHandler('Berry')}>Berry</li>
                            <li data-filter=".lemon" onClick={() => clickSortingHandler('Lemon')}>Lemon</li>
                            <li data-filter=".kiwi" onClick={() => clickSortingHandler('Kiwi')}>Kiwi</li>
                            
	
                        </ul>
						
                    </div>
					
                </div>
				<div className="col-md-4">
				<input icon='search' className="serach-input" placeholder='Search...' onChange={(e) => searchItems(e.target.value)}/>
				</div>
            </div>
			<h2 className="text-center">{msg}</h2>
			<div className="row product-lists">
				
			{searchInput.length > 1 || searchData.length > 1 ? (filteredResults.map((product) => ( // slice used to show limited data 
			<Product
			  key={product.id}
			  id={product.id}
			  nid={product.nid}
			  title={product.title}
			  price={product.price}
			  description={product.description}
			  image={product.image}
			/>
			
		  ))):(
			loadedProducts.map((product) => ( // slice used to show limited data 
			<Product
			  key={product.id}
			  id={product.id}
			  nid={product.nid}
			  title={product.title}
			  price={product.price}
			  description={product.description}
			  image={product.image}
			/>
		  ))
		  )}
			
				
			</div>

			<div className="row">
				<div className="col-lg-12 text-center">
					<div className="pagination-wrap">
						<ul>
							<li><Link to="#">Prev</Link></li>
							<li><Link to="#">1</Link></li>
							<li><Link className="active" to="#">2</Link></li>
							<li><Link to="#">3</Link></li>
							<li><Link to="#">Next</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
        </Fragment>
    );
}

export default ShopPage;