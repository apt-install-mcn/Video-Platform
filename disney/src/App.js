import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';
import { Navigate } from 'react-router-dom';
import ContentCategory from './components/ContentCategory/ContentCategory.jsx';
import ContentDetails from './components/ContentDetails/ContentDetails.jsx';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/home" /> : <Login setLoggedIn={setLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        {/* Cambia el Route para ContentCategory para incluir el parámetro categoryId */}
        <Route path="/contentCategory/:categoryId" element={<ContentCategory />} />
        <Route path="/contentDetails/:movieId" element={<ContentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
