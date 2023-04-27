import {QRCodeCanvas} from 'qrcode.react';
import './App.css';
import {useState,useEffect,useContext,createContext} from 'react';
import Home from './components/Home/Home';
import MemberSignup from './components/MemberSignup/MemberSignup';
import SplashPage from './components/SplashPage/SplashPage';
import Cookies from 'universal-cookie';
import {Route,Routes} from 'react-router-dom';
export const SessionIDContext = createContext();
export const AccessTokenContext = createContext();

document.body.style = "background:grey"

function App() {
  const [sessionID,setSessionID] = useState('');
  const [accessToken,setAccessToken] = useState('');

  const sessionIDValue = {sessionID,setSessionID};
  const accessTokenValue = {accessToken,setAccessToken};

  useEffect(() => {
    let cookies = new Cookies();
    setSessionID(cookies.get('sessionID'));
    setAccessToken(cookies.get('accessToken'));
  },[]);

  return (
    <span>
      <SessionIDContext.Provider value={sessionIDValue}>
        <AccessTokenContext.Provider value={accessTokenValue}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/redirect' element={<SplashPage/>}></Route>
          </Routes>
        </AccessTokenContext.Provider>
      </SessionIDContext.Provider>
    </span>
    
  );
}

export default App;
