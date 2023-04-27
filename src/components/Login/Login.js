import TitleBar from '../TitleBar/TitleBar';
import {useState,useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { SessionIDContext,AccessTokenContext } from '../../App';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import Button from '../../styled-components/Button/Button';
import SlateGreyForm from '../../styled-components/SlateGreyForm/SlateGreyForm';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentLocation,setCurrentLocation] = useState('');
    const [branches,setBranches] = useState([]);
    const {sessionID,setSessionID} = useContext(SessionIDContext);
    const {accessToken,setAccessToken} = useContext(AccessTokenContext);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/getbranches').then((res) => setBranches(res.data)).catch((err) => console.log(err));
    },[])

    let navigate = useNavigate();

    let cookies = new Cookies();

    const usernameHandler = e => setUsername(e.target.value);

    const passwordHandler = e => setPassword(e.target.value);

    const currentLocationHandler = e => setCurrentLocation(e.target.value);

    const submit = (e) => {
        e.preventDefault();
        if (username === '' || password === '' || currentLocation === '') {
            alert('One or more fields left blank');
        } else {
            let credentials = {
                username:username,
                password:password,
                currentLocation:currentLocation
            };

            let storeCookies = (accessToken,sessionID) => {
                cookies.set('accessToken',accessToken,{path:'/'});
                cookies.set('sessionID',sessionID,{path:'/'});
                cookies.set('currentLocation',currentLocation,{path:'/'})
                setSessionID(sessionID);
                setAccessToken(accessToken);
            }

            Axios.post('http://localhost:8000/api/login',credentials)
            .then((res) => {
                if (res.data === 'invalid login') {
                    alert('invalid credentials');
                } else {
                    storeCookies(res.data.accessToken,res.data.sessionID);
                    alert('login successful');
                    navigate('/redirect');
                }
            })
            .catch(err => console.log(err));
        };  
    } ;

    const branchMap = branches.sort().map(e => <option value={e}>{e}</option>);

    return(
        <span>
            <TitleBar></TitleBar>    
            <SlateGreyForm flexDirection='column' height={'22.5em'} width={'18em'} justifyContent={'space-around'} alignItems={'center'} top = {'48%'}>
                <div className='turbo_polyp'>Turbo Polyp</div>
                <div className='login_input'>
                    <label id='username'></label>
                    <input className='input' htmlFor='username' type='text' placeholder='Username' onChange={usernameHandler}></input>
                </div>
                <div className='login_input'>
                    <label id='password'></label>
                    <input className='input' htmlFor='username' type='text' placeholder='password' onChange={passwordHandler}></input>
                </div>
                    <select className='input' htmlFor='location' placeholder='Login Location' onChange={currentLocationHandler}>
                        <option value='' disabled selected hidden>Region</option>
                        {branchMap}
                    </select>
                <Button onClick={submit} width={'15 em'}>Okaaaaaay let's go</Button>
                <a href='/signup'>Create account</a>
            </SlateGreyForm>
        </span>
    )
};

export default Login