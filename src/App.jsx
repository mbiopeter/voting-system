import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import UpBar from './components/upBar/UpBar';
import Auth from './pages/auth/Auth';
import Admin from './pages/Admin/Admin';
import Error404 from '../../eccommerce/website/E-commerce-Website/src/views/pages/error/Error404';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

function AppContent() {
  const location = useLocation();
  const showUpBar = !(location.pathname === '/auth');
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
      const checkAuth = () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
          navigate("/auth");
          return;
      }

      try {
          const decoded = jwtDecode(token);
          setUser(decoded)
          if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("authToken");
          navigate("/auth");
          }
      } catch (error) {
          localStorage.removeItem("authToken");
          navigate("/auth");
      }
      };

      checkAuth();
  }, [navigate]);


    const NotFound = () => <Error404 />;
    return(
      <>
        {showUpBar && <UpBar user={user}/>}
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin user={user}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
}

function App() {
  return (
      <Router>
        <AppContent />
      </Router>
  );
}

export default App;
