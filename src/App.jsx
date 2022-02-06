import React from 'react';
import Service from './Service';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Navigate to={"/services"} />} />
        <Route path="/services" exact element={<Service/>} />
      </Routes>
    </Router>
  )
}

export default App;

