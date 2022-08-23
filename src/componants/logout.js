import React from "react";
import {GoogleLogout} from "react-google-login";
const clientId="542449161011-q10gjm0ssf8aeek4eu42p5sbd7ot7c3r.apps.googleusercontent.com";
function Logout(){
     const onSuccess =(res)=>{
          console.log("Logout Success ! Current User");
     }
    
     return(
          <div id="signOutButton">
               <GoogleLogout
               clientId={clientId}
               buttonText="Logout"
               onLogoutSuccess={onSuccess}
             
               />

          </div>
     )
}
export default Logout;
