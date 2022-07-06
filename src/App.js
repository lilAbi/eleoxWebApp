import { useState} from 'react';
import LoginPageLayout from "./components/layouts/LoginPageLayout";
import Hub from './components/layouts/Hub';
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
      {loggedIn && <Hub token={token} handleLogout={setLoggedIn}/>}
      </UsernameContext.Provider>
    </div>
  );
}

export default App;


