import React from "react";
import {GoogleLogin} from "react-google-login";
const clientId="542449161011-q10gjm0ssf8aeek4eu42p5sbd7ot7c3r.apps.googleusercontent.com";
function Login(){
     const onSuccess =(res)=>{
          console.log("Login Success ! Current User",res);
     }
     
     const onFailure =(res)=>{
          console.log("Login Faild ! Current User",res);
     }
     return(
          <div id="signInButton">
               <GoogleLogin
               clientId={clientId}
               buttonText="Login"
               onSuccess={onSuccess}
               onFailure={onFailure}
               cookiePolicy={'single_host_origin'}
               isSignedIn={true}
               
               />

          </div>
     )
}
export default Login;