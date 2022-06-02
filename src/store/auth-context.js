import React, { useState ,useEffect,useCallback } from 'react';



const AuthContext = React.createContext({
  token: '',
  userProfile : (userdata) =>{},
  isLoggedIn: false, // current user loggined or not 
  login: (token) => {}, // token as argu
  logout: () => {}, // no arug
});

const calculateRemainingTime = (expirationTime) =>{
    const currentTime = new Date().getTime();

    const adjExpirationTime =  new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
}

//if token is valid retrive token r else delete it

const retrieveStoredToken = () =>{

 
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000000) {
 
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('access_token');

    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };

}   

export const AuthContextProvider = (props) => {

const tokenData = retrieveStoredToken();
  
  // const initialToken = localStorage.getItem('token'); // to stay page after login we need to use this for temp purpose
  // const initialToken = tokenData.token; // to stay page after login we need to use this for temp purpose
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  // console.log(tokenData.token + 'tokenData');

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token; // act as true or false


let logoutTimer;

  const logoutHandler = useCallback(() => {
    setToken(null);

    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('access_token');

    if(logoutTimer){
      clearTimeout(logoutTimer)
    }

   
  },[]);


  const loginHandler = (token, expirationTime) => {
    // alert();
    setToken(token);


    localStorage.setItem('token',token); // store only p data
    localStorage.setItem('expirationTime',expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer =setTimeout(logoutHandler,remainingTime);
  };

  const userdata = (userdata) => {
    const data = {
      id: userdata.id,
      username: userdata.username,
      name: userdata.name,
      email: userdata.email,
      access_token: userdata.access_token,
    }
    console.log(userdata);
    localStorage.setItem('username',data.username); // store only p data
    localStorage.setItem('email',data.email);
    localStorage.setItem('access_token',data.access_token);
  }
  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userProfile: userdata,// fetching from new link
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;