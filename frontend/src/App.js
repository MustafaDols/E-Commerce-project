import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import About from './pages/About'; 
import MessageSent from './pages/MessageSent';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './hooks/useCart';
import Notification from './components/Notification';
import useNotification from './hooks/useNotification';
function App() {
  const { notification, showNotification } = useNotification();
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          {notification && <Notification message={notification} onClose={() => showNotification(null)} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login showNotification={showNotification} />} />
            <Route path="/register" element={<Register showNotification={showNotification} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop showNotification={showNotification} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/message-sent" element={<MessageSent />} />
             
            
            
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
