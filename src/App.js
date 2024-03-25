import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Map   from "./Components/Map";
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>App</h1>
        <Map />
      </header>
    </div>
  );
}

export default App;
