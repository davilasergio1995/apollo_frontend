import {useState,useEffect,createContext} from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import Login from '../Login/Login';
import LibrarianHub from '../LibrarianHub/LibrarianHub';
export const AccountTypeContext = createContext();

const Home = () => {
    
    const [accountType,setAccountType] = useState('');
    const accountTypeValue = {accountType,setAccountType};
    let cookies = new Cookies;
    let sessionID = cookies.get('sessionID');
    let accessToken = cookies.get('accessToken');

    useEffect(() => {
        if (sessionID) {
            Axios.get('http://localhost:8000/api/confirmusertype',{
                headers:{
                    'authorization': `Bearer ${accessToken}`
                },
                params:{
                    sessionID:sessionID
                }
            }).then((res) => setAccountType(res.data)).catch((err) => console.log(err));
        }
    },[]);
    
    if(!sessionID) {
        return(<Login/>)
    };

    switch(accountType) {
        case 'customer':
        return(
            <div>penis</div>
        );
        break;

        default:
        return(
            <AccountTypeContext.Provider value={accountTypeValue}>
                <LibrarianHub/>
            </AccountTypeContext.Provider>
        )
    }
};

export default Home