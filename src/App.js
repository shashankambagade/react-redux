import './App.css';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './Components/Products';
import Cart from './Components/Cart';
import Checkout from './Pages/Checkout'; 
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { auth } from './firebaseConfig';
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, [])
  
  const handleLogout = async () => {
    await auth
    .signOut()
    alert('Logged out successfully');
  }

  return (
       <BrowserRouter>
          <Navbar expand="lg" bg="dark" data-bs-theme="dark">
              <Container>
                <Navbar.Brand href="#home">React Redux</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  <Link to="/" className='btn btn-link'>Home</Link>
                  <Link to="/cart" className='btn btn-link'>Cart</Link>
                  <Link to="/checkout" className='btn btn-link'>Checkout</Link>
                  {!user ? (
                    <>
                      <Link to='/login' className='btn btn-link'>Login</Link>
                      <Link to='/signup' className='btn btn-link'>SignUp</Link>
                    </>
                  ) : (
                    <button className='btn btn-link' onClick={handleLogout}>Logout</button>
                  )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Routes>
              <Route path='/' element={<ProductList />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
            </Routes>
       </BrowserRouter>
  );
}

export default App;
