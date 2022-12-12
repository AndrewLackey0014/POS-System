import { GoogleLogin } from 'react-google-login';

const clientId = "231326845154-144brcs88gukjjin9alrmbkt8pdno2ti.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN Failes! res: ", res);
    }



    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}/>
        </div>

    )
}

export default Login;
