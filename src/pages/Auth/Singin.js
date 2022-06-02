import { Fragment,useRef ,useEffect,useState,useContext, useCallback} from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";
import { Button } from "bootstrap";





const Singin = () =>{
   
    

    const history = useHistory();

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
  
    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };
 
    const signIn = () => {
        alert('hello');
        let url = 'http://localhost/reactjs/oauth/authorize?client_id=7c49c444-5d02-4d5b-bafd-ef804ad69eea&scope=content_editor&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdrupal&reactauth=signin%2Cdrupal&state';
     
        let data = [
            {
                id: "drupal",
                name: "Next.js for Drupal",
                type: "oauth",
                version: "2.0",
                token: `http://localhost/reactjs/oauth/token`,
                authorization: `http://localhost/reactjs/oauth/authorize?response_type=code`,
                userinfo: `http://localhost/reactjs/oauth/userinfo`,
                async profile(profile) {
                  return {
                    id: profile.sub,
                    username: profile.preferred_username,
                    email: profile.email,
                  }
                },
                clientId: process.env.OAUTH_CLIENT_ID,
                clientSecret: process.env.OAUTH_CLIENT_SECRET,
              },
        ]

    }
   
    
    return <Fragment>
      
     <section className="login-section">
     <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Sign Up</h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10 justify-content-center">
           
                <div className="row ">
                {/* <div className="col-md-6">
                     <div className="login-img img" ></div>
                </div> */}
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
               {/* <form onSubmit={submitHandler}> */}
              
                    <div className="form-group">
                        {/* <button type="submit" className="form-control btn btn-primary rounded submit mt-2 px-3">submit</button> */}
                       
                        <button onClick={() => signIn()} type="submit" className="form-control btn btn-primary rounded submit mt-2 px-3">
                                Sign in with ReactJs for Drupal
                        </button>
                       
                      
                        
                    </div>
                    
                    
               {/* </form> */}
                </div>
                </div>
            </div>
        </div>
    </div>
     </section>
          </Fragment>
}
export default Singin;