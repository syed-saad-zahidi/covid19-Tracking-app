import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import InfoPanel from './Components/InfoPanel';
import FootNav from './Components/footNav'

function App() {
  const screenConfig = useState(0);
  return (
    <div className="App">
     <NavBar />
     <InfoPanel currentScreen={screenConfig[0]}/>
     <FootNav screenConfig={screenConfig} / >
    </div>
  );
}

export default App;
