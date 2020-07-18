import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import InfoPanel from './Components/InfoPanel';
import FootNav from './Components/footNav'

function App() {
  
  return (
    <div className="App">
     <NavBar />
     <InfoPanel/>
     <FootNav / >
    </div>
  );
}

export default App;
