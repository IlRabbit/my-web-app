import React from 'react';
import MyNav from './components/MyNav.jsx'
import SpellsGallery from './components/SpellsGallery.jsx';
import Home from './components/Home.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
      
    <Router>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spells" element={<SpellsGallery />} />
        </Routes>
      </div>
    </Router>
      
  );
}

export default App;
