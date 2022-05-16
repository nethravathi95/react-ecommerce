import { useEffect } from 'react';

import useHttp from '../../hooks/use-http';
import { getAllProducts } from '../../lib/api';
import ProductList from '../Product/ProductList';




const AllProducts = () => {
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
       
        // return <p>wait</p>;

        return <ProductList products={loadedProducts}></ProductList>
        
}

export default AllProducts;