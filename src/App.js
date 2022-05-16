

import { Fragment } from 'react';
import CartProvider from './store/CartProvider';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Fragment>
       <CartProvider>
         <MainPage/>
      </CartProvider>
    </Fragment>
    
  );
}

export default App;
