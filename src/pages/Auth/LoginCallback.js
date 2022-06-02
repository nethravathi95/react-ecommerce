import { Fragment,useRef ,useEffect,useState,useContext, useCallback} from "react";
import { Link,useParams,useLocation } from "react-router-dom";
import { authcode } from '../../lib/api';
import useHttp from '../../hooks/use-http';
import Login from "./Login";
import AuthContext from "../../store/auth-context";
import { useHistory } from 'react-router-dom';
import Dashboard from '../Dashboard'

const LoginCallback = () =>{
    const location = useLocation();

    let url = location.search;
    url = url.replace(/[&\/\\#,+()$~%.='":*?<>{}]/g, '');
    url = url.replace('code','');
    url = url.replace('state','');

    const history = useHistory();

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const auth_code = url;
   
    const {sendRequest , status ,data : userdata,error}= useHttp(authcode,true);
    useEffect(()=>{
        sendRequest(auth_code);

        },[sendRequest,auth_code]);
        if(status === 'pending'){
            return (<div className='centered'>
            {/* <LoadingSpinner/> */}
    </div>);
    }

    if(error){
            return <p className='centered'>{error}</p>
    }
    
    console.log(userdata);

    const userinfo= {
    id: userdata.id,
    username: userdata.username,
    name: userdata.name,
    email: userdata.email,
    access_token:userdata.access_token,
    expires_in:userdata.expires_in,
      }
      const expirationTime = new Date((new Date().getTime() + (+userinfo.expires_in * 1000)));
    authCtx.login(userinfo.access_token , expirationTime.toISOString());

    authCtx.userProfile(userinfo);
    //  console.log(userdata);
    history.replace('/dashboard');

    return <Dashboard userinfo={userdata}></Dashboard>
    
}

export default LoginCallback;