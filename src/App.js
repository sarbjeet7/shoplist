import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import ShopList from './components/ShopList';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client_id="535034517954-brm7ca15fra50u5qkn1rt5i4i7o3s0gt.apps.googleusercontent.com";


function App() {
  useEffect (()=>{
    function start(){
      gapi.client.init({
        client_id: client_id,
        scope:""
      })
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/shoplist" exact element={<ShopList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
