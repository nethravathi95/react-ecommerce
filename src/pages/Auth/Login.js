import { Fragment } from "react";
import { Link } from "react-router-dom";


const Login = () =>{
    return <Fragment>
      
     <section className="login-section">
     <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">LOGIN</h2>
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
               <form>
               <div className="form-group mb-3">
                        {/* <label className="label">USERNAME</label> */}
                            <input type="text" className="form-control" placeholder="Username" required=""/>
                    </div>
                    <div className="form-group mb-3">
                   
                        {/* <label className="label">PASSWORD</label> */}
                            <input type="password" className="form-control" placeholder="password" required=""/>
                            <Link to="#" >Forgot password?</Link>
                    </div>
                    <div className="form-group">
                        {/* <button type="submit" className="form-control btn btn-primary rounded submit mt-2 px-3">submit</button> */}
                        <button type="submit" className="form-control btn btn-primary rounded submit mt-2 px-3">Sign Up</button>
                    </div>
                    
                    <div className="sign-up">
                        
					Don't have an account? <a href="#">Create One</a>
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