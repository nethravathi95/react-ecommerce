import { Fragment,useRef ,useEffect,useState,useContext, useCallback} from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";

const Login = () =>{
    const history = useHistory();

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
  
    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();
    const enteredUserName = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
  setIsLoading(true);

  const formData = new URLSearchParams();
  formData.append('grant_type', 'password');
  formData.append('client_id', '7ef57b4a-7ae3-42cf-b9aa-f873e1d11184');
  formData.append('client_secret', 12345);
  formData.append('scope', 'content_editor');
  formData.append('username', enteredUserName);
  formData.append('password', enteredPassword);

        let url;
    
        if (isLogin) {
    url = 'http://localhost/reactjs/oauth/token';
        } 
        else {
          url='';
         }
         fetch(
          url,
          {
            method: "POST",
            mode:'cors',
            body: formData,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
          }
        ).then((res) => {
    
          setIsLoading(false);
          if (res.ok) {
            return res.json();
    
         
            history.replace('/');
    
    
          } else {
            return res.json().then((data) => {
              // show an error modal
              // console.log(data);
              let errorMessage = 'Authentication is failed';
    
              // if(data && data.error && data.error.message){
              //   errorMessage = data.error.message;
              // }
    
              //  alert(errorMessage);
               throw new Error(errorMessage)
            });
          }
        }).then((data) => {
            console.log(data.expires_in);
            
            // const decoded = jwt_decode(data.access_token)
            // console.log(decoded);
           
            // const { exp } = jwtDecode(data.access_token)
            // console.log(exp);
            if (Date.now() < data.expires_in) {
              return data.access_token
            }
            return  refreshAccessToken(data.refresh_token)

            
        }).catch((err) => {
          alert(err.message);
        });
    }

    async function refreshAccessToken(token) {
  
      const formData = new URLSearchParams()
  
     
    formData.append('grant_type', 'refresh_token');
    formData.append('client_id', '7ef57b4a-7ae3-42cf-b9aa-f873e1d11184');
    formData.append('client_secret', 12345);
    formData.append("refresh_token", token)
  
      const response = await fetch(`http://localhost/reactjs/oauth/token`, {
      method: "POST",
              mode:'cors',
              body: formData,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              },
    })
  
    const data = await response.json()
     
  
      if (!response.ok) {
        throw new Error(data.message || 'Could not access user data.');
      }
      const refreshToken = {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_in: data.expires_in,
        // ...data
      };
      const expirationTime = new Date((new Date().getTime() + (+refreshToken.expires_in * 1000)));
            authCtx.login(refreshToken.refresh_token , expirationTime.toISOString());
           
       fetch(
          `http://localhost/reactjs/oauth/userinfo?_format=json`,
          {
            method: "POST",
            mode:'cors',
            // body: UserData,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': `Bearer ${refreshToken.access_token}`,
            },
          }
        ).then((res) => {
    
          if (res.ok) {
            return res.json();
          } 
        }).then((data) => {
            

            const userdata = {
              id: data.sub,
          username: data.preferred_username,
          name: data.name,
          email: data.email,
          access_token:refreshToken.access_token,
            }
            authCtx.userProfile(userdata);
          //  console.log(userdata);
          history.replace('/dashboard');
        });
   
  return refreshToken;
     
  }

  
    return <Fragment>
      
     <section className="login-section">
     <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">{isLogin ? 'Login' : 'Sign Up'}</h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
                <div className="row ">
                <div className="col-md-6">
                     <div className="login-img img" ></div>
                </div>
                <div className="col-md-6 p-4 ">
                    <div className="d-flex">
                            <div className="w-100">
                            {/* <h3 className="mb-4 text-center">LOGIN</h3> */}
                    </div>
                    <div className="w-100">
                        <p className="social-media d-flex justify-content-end">
                            {/* <Link to="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fab fa-facebook-f"></span></Link> */}
                            {/* <Link to="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fas fa-twitter"></span></Link> */}
                        </p>
                    </div>
                </div>
               <form onSubmit={submitHandler}>
               <div className="form-group mb-3">
                        {/* <label className="label">USERNAME</label> */}
                            <input type="text" className="form-control" placeholder="Username" ref={usernameInputRef} required=""/>
                    </div>
                    <div className="form-group mb-3">
                   
                        {/* <label className="label">PASSWORD</label> */}
                            <input type="password" className="form-control" placeholder="password" ref={passwordInputRef} required=""/>
                            <Link to="#" >Forgot password?</Link>
                    </div>
                    <div className="form-group">
                        {/* <button type="submit" className="form-control btn btn-primary rounded submit mt-2 px-3">submit</button> */}
                       
                        {!isLoading &&   <button type="submit" className="form-control btn btn-primary rounded submit mt-2 px-3">
                          {isLogin ? 'Login' : 'Create Account'}
                          </button>}
                        {isLoading && <p>Sending Request.....</p>}
                    </div>
                    
                    <div className="sign-up">
                        
					{/* Don't have an account? <a href="#">Create One</a> */}
				</div>
               </form>
                </div>
                </div>
            </div>
        </div>
    </div>
     </section>
          </Fragment>
}
export default Login;