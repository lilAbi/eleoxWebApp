import { useState, useEffect } from 'react';
import LoginPageLayout from "./components/LoginPageLayout";
import Hub from './components/Hub';
import './App.css';



function App() {

  const [token, setToken] = useState("noToken");
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(()=>{

    console.log(token);
    console.log(loggedIn);

  },[loggedIn,token]);


  return (
    <div>
      {!loggedIn && <LoginPageLayout updateToken={setToken} updateLoginStatus={setLoggedIn}/>}
      {loggedIn && <Hub/>}
    </div>
  );
}

export default App;


