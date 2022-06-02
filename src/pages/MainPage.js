

import { Fragment ,useContext} from 'react';
import Footer from '../components/Footer/Footer';
import AboutPage from '../pages/AboutPage';
import {Route ,Switch,useLocation,Redirect} from 'react-router-dom';
import NotFound from '../components/NotFound';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Cart/Checkout';
import SingleProducts from '../components/Product/SingleProduct';
import ShopPage from '../pages/ShopPage';
import Login from '../pages/Auth/Login';
import Dashboard from './Dashboard';
import Singin from '../pages/Auth/Singin';
import LoginCallback from '../pages/Auth/LoginCallback'
import CartContext from '../store/cart-context';
import AuthContext from '../store/auth-context';

function MainPage() {
  const authctx = useContext(AuthContext);

  // const isLoggedIn = authCtx.isLoggedIn;
    const location=useLocation();
            const islogin = location.pathname === "/login";// to hide footer we used used location function
            const isSingin = location.pathname === "/singin";// to hide footer we used used location function
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
    <Route path='/singin' exact component={Singin}/>
    <Route path='/login' exact component={Login}/>
    <Route path='/dashboard' exact component={Dashboard}/>
    <Route path='/single-product/:productId' exact component={SingleProducts}/>
    <Route path="/api/auth/callback/drupal" component={LoginCallback}/>
    <Route path='*' component={NotFound}/>

    
    </Switch>
    {!islogin && !isSingin && // to hide specified page we need to use this logic
    <Footer/> }
    </Fragment>
    
  );
}

export default MainPage;
