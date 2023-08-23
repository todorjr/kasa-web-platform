import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import Error from './components/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Details />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  </React.StrictMode>
);
