
import { GoogleLogin } from 'react-google-login';

const clientId = "231326845154-144brcs88gukjjin9alrmbkt8pdno2ti.apps.googleusercontent.com";

function Logout() {

const onSuccess = (res) => {
console.log("Logout Successful!");
}

return(
    <div id="signOutButton">
        <GoogleLogin
        clientId={clientId}
        buttonText="Logout"
        onSuccess={onSuccess}/>
    </div>

)
}

export default Logout;
