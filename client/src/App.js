import React from 'react';
import './App.css';
import Routes from './routes';
import Navbar from './containers/Navbar';
import { Footer } from './components/';

const App = () => {
  return (
    <div className="App" style={{ backgroundColor: 'white' }}>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
