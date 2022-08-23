import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import LoginButton from "./componants/login";
import LogoutButton from "./componants/logout";
import { gapi } from 'gapi-script';
const CLIENT_ID="542449161011-q10gjm0ssf8aeek4eu42p5sbd7ot7c3r.apps.googleusercontent.com";
const API_KEY="AIzaSyDeCKUW8_L4zx-mDbxhceJb8rWGh2RlgGI";
const SCOPES="https://www.googleapis.com/auth/youtubepartner-channel-audit";

function App() {

  useEffect(()  =>{
    function start(){
      gapi.client.init({
        apiKey:API_KEY,
        clientId:CLIENT_ID,
        scope:SCOPES
     
      })
    };

gapi.load('client:auth2',start);
  });

  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
    </div>
  );
}

export default App;
