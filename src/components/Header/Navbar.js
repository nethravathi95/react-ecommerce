import React,{useEffect,useState,useRef,Fragment,useContext} from 'react';
import {Link,NavLink} from 'react-router-dom';
// import '../../components/Header/Header.css';
import logo from '../../assets/img/logo.png';
import CartItems from '../Cart/CartItems';
import Modal from '../Modal';
import CartButton from './CartButton';
import CartContext from '../../store/cart-context';

const Navbar = () =>{
  const cartCtx = useContext(CartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;


    const [isSticky,setIsSticky] = useState(false);
    const [activeClass,setActiveClass] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

      const showSearchHandler = () => {
        setActiveClass(true);
      }

      const closeSearchHandler = () =>{
        setActiveClass(false);
        console.log('close');
      }
    return  (
    <Fragment>
      {/* PreLoader
<div class="loader">
        <div class="loader-inner">
            <div class="circle"></div>
        </div>
    </div>
    end PreLoader */}

    <nav className={isSticky ? `navbar navbar-expand-md navbar-dark fixed-top bg-darks p-4 is-sticky` : `navbar navbar-expand-md navbar-dark fixed-top bg-darks p-4`} >
        
    <div className='container'>
      {/* <NavLink className="navbar-brand ml-4" to="#">Carousel</NavLink> */}

      <div className="site-logo">
              <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
                       
      </div>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarCollapse">
        <ul className="navbar-nav main-menu">
        <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/about">About </NavLink>
          </li>
          
         
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pages">Pages</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop">shop</NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/login">login</NavLink>
          </li> */}
         
        </ul>
        
        <div className="header-icons mt-2 mt-md-0">
       
        
    
        <Link to="#" data-toggle="dropdown" id="cart" ><CartButton></CartButton></Link>
        
        <div className="dropdown">
          
          <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header">
              {/* <i className="fas fa-shopping-cart"></i> */}
              <p><span className='text-left'>All Items</span><span className='float-right'>Total: {totalAmount}</span></p>
              
              </div>
                <CartItems/>
             <div className='row p-4'>
                <div className='col-md-6'><Link to="cart" className='add-cart-btn header-btn'>Cart</Link></div>
                <div className='col-md-6'><Link to="checkout" className='add-cart-btn header-btn'>Checkout</Link></div>
             </div>
             
           </div> 
           </div>
          </div>
									
									<Link  className="mobile-hide search-bar-icon" to="#">
                    <i className="fas fa-search" onClick={showSearchHandler}></i>
                  </Link>
				</div>
     
      </div>
    </nav>

    {/* add cart dropdown */}
    {/* <div className="container">
  <div className="shopping-cart">
    <div className="shopping-cart-header">
      <i className="fa fa-shopping-cart cart-icon"></i><span class="badge">3</span>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">$2,229.97</span>
      </div>
    </div> 
    <ul className="shopping-cart-items">
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <span className="item-name">Sony DSC-RX100M III</span>
        <span className="item-price">$849.99</span>
        <span class="item-quantity">Quantity: 01</span>
      </li>

      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
        <span className="item-name">KS Automatic Mechanic...</span>
        <span className="item-price">$1,249.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>

      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
        <span className="item-name">Kindle, 6" Glare-Free To...</span>
        <span className="item-price">$129.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>
    </ul>

    <a href="#" className="button">Checkout</a>
  </div> 
</div> */}
    {/* <div>
      {activeClass && <div className="search-area search-active">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span className="close-btn" ><i className="fas fa-window-close" onClick={closeSearchHandler}></i></span>
                <div className="search-bar">
                  <div className="search-bar-tablecell">
                    <h3>Search For:</h3>
                    <input type="text" placeholder="Keywords"/>
                    <button type="submit">Search <i className="fas fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
	  </div>}
    {!activeClass && ''}
    </div> */}

    {activeClass && <Modal onClose={closeSearchHandler}/>}
    </Fragment>
    );


}

export default Navbar;