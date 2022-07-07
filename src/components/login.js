import { GoogleLogin }  from 'react-google-login';

const client_id = "535034517954-brm7ca15fra50u5qkn1rt5i4i7o3s0gt.apps.googleusercontent.com";

function Login() {

    const onSuccess=(res)=> {
        console.log("Login Successfully");
    }

   const onFailure = (res)=> {
         console.log("Login Failed");
   }


    return (
      <div id="SignInBtn">
         <GoogleLogin
           clientId={client_id}
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


