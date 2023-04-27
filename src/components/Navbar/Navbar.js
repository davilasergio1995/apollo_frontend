import {useState,useEffect,useContext} from 'react';
import Cookies from 'universal-cookie';
import { SessionIDContext,AccessTokenContext } from '../../App';
import { AccountTypeContext } from '../Home/Home';
import { CurrentPageContext,CurrentSearchResultsContext } from '../LibrarianHub/LibrarianHub';
import SignedInNavbar from '../../styled-components/SignedInNavbar/SignedInNavbar';
import Button from '../../styled-components/Button/Button';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    let cookies = new Cookies();

    const {setSessionID} = useContext(SessionIDContext);
    const {setAccessToken} = useContext(AccessTokenContext);
    const {accountType,setAccountType} = useContext(AccountTypeContext);
    const {currentPage,setCurrentPage} = useContext(CurrentPageContext);
    const {currentSearchResults,setCurrentSearchResults} = useContext(CurrentSearchResultsContext);
    let navigate = useNavigate();

    let logOut = () => {
        cookies.remove('accessToken');
        cookies.remove('sessionID');
        cookies.remove('currentLocation');
        setSessionID('');
        setAccessToken('');
        setAccountType('');
        navigate('/redirect');
    };

    let resetCurrentPage = () => {
        setCurrentPage('');
        setCurrentSearchResults([]);
    };

    if (!currentPage) {
        return(
            <SignedInNavbar>
                <Button backgroundColor='#29535c' onClick={logOut}>Log out</Button>
                <p>User type: {accountType}</p>
            </SignedInNavbar>
        );
    } else {
        return(
            <div>
                <SignedInNavbar>
                <Button position='fixed' top='.75em' left='10em' width='7.5em' height='3em' onClick={resetCurrentPage}>Return</Button>
                    <Button onClick={logOut} backgroundColor='#29535c' >Log out</Button>
                    <p>User type: {accountType}</p>
                </SignedInNavbar>
            </div>           
        );
    }  
};

export default Navbar