

import { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import AboutPage from '../pages/AboutPage';
import {Route ,Switch,useLocation} from 'react-router-dom';
import NotFound from '../components/NotFound';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Cart/Checkout';
import SingleProducts from '../components/Product/SingleProduct';
import ShopPage from '../pages/ShopPage';
import Login from '../pages/Auth/Login';

function MainPage() {
    const location=useLocation();
            const islogin = location.pathname === "/login";// to hide footer we used used location function
  return (
    <Fragment>
    <Switch>
    <Route path='/' exact component={HomePage}/>
    <Route path='/about' exact component={AboutPage}/>
    <Route path='/contact' exact component={Contact}/>
    <Route path='/cart' exact component={Cart}/>
    <Route path='/checkout' exact component={Checkout}/>
    <Route path='/shop' exact component={ShopPage}/>
    <Route path='/login' exact component={Login}/>
    <Route path='/single-product/:productId' exact component={SingleProducts}/>
    <Route path='*' component={NotFound}/>
    </Switch>
    {!islogin && // to hide specified page we need to use this logic
    <Footer/> }
    </Fragment>
    
  );
}

export default MainPage;
