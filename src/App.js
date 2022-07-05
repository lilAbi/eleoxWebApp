import { useState, useEffect, createContext } from 'react';
import LoginPageLayout from "./components/LoginPageLayout";
import Hub from './components/Hub';
import './App.css';

import { UsernameContext } from './components/utility/UsernameContext';


function App() {

  const [token, setToken] = useState("noToken");
  const [loggedIn, setLoggedIn] = useState(false);

  const [username, setUsername] = useState("nousername");



  return (
    <div>
      <UsernameContext.Provider value={username}>
      {!loggedIn && <LoginPageLayout 
                      updateToken={setToken} 
                      updateLoginStatus={setLoggedIn}
                      updateUserName={setUsername}
                      />
      }
      {loggedIn && <Hub/>}
      </UsernameContext.Provider>
    </div>
  );
}

export default App;


