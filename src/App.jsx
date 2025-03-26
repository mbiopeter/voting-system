import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import UpBar from './components/upBar/UpBar';
import Auth from './pages/auth/Auth';
import Admin from './pages/Admin/Admin';
import Error404 from '../../eccommerce/website/E-commerce-Website/src/views/pages/error/Error404';

function AppContent() {
    const location = useLocation();
      const showUpBar = !(location.pathname === '/auth');
  const NotFound = () => <Error404 />;

    return(
      <>
        {showUpBar && <UpBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
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
