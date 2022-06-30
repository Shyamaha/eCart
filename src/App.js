import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Checkout from './components/Checkout';
import {Routes,Route} from 'react-router-dom';
  
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path= '/'  element={<Home />}/>
        <Route path= '/products'  element={<Products />}/>
        <Route path= '/Products/:id' element={<Product />}/>
        <Route path= '/cart' element={<Cart />}/>
        <Route path= '/register' element={<Register />}/>
        <Route path= '/about' element={<About />}/>
        <Route path= '/contact' element={<Contact />}/>
        <Route path= '/login' element={<Login />}/>
        <Route path= '/checkout' element={<Checkout />}/>
      </Routes>
    </>
  );
}

export default App;
