import React from 'react';
import MyNav from './components/MyNav.jsx'
import SpellsGallery from './components/spells/SpellsGallery.jsx';
import FeatsGallery from './components/feats/FeatsGallery.jsx';
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
          <Route path='/feats' element={<FeatsGallery />} />
        </Routes>
      </div>
    </Router>
      
  );
}

export default App;
