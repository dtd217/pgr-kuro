import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Search from './Pages/Search';
import SingleAircraft from './Pages/SingleAircraft';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/character/:id" element={<SingleAircraft />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
