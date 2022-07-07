import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

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
      <Login/>
     
    </div>
  );
}

export default App;
