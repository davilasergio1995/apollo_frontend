import Navbar from '../Navbar/Navbar';
import BookSearch from '../BookSearch/BookSearch';
import MemberSignup from '../MemberSignup/MemberSignup';
import HoldsList from '../HoldsList/HoldsList';
import SlateGreyContainer from '../../styled-components/SlateGreyContainer/SlateGreyContainer';
import LibHubOptionDiv from '../../styled-components/LibHubOptionDiv/LibHubOptionDiv';
import { AccountTypeContext } from '../Home/Home';
import Axios from 'axios';
import {useState,useEffect,useContext,createContext} from 'react';
import { useNavigate } from 'react-router-dom';
export const CurrentSearchResultsContext = createContext();
export const CurrentDisplayedBookContext = createContext();
export const CurrentPageContext = createContext();
export const TestContext = createContext();

const LibrarianHub = () => {
    const [test] = useState('test');
    const [currentPage,setCurrentPage] = useState('');
    const [currentSearchedBook,setCurrentSearchedBook] = useState('');
    const [currentSearchResults,setCurrentSearchResults] = useState([]);
    const [currentDisplayedBook,setCurrentDisplayedBook] = useState('');
    const {accountType,setAccountType} = useContext(AccountTypeContext);
    const currentPageValue = {currentPage,setCurrentPage};
    const testValue = {test}
    const navigate = useNavigate();

    const [hovered,setHovered] = useState(false);

    const hoveredHandler = () => setHovered(!hovered);

    const currentSearchResultsValue = {currentSearchResults,setCurrentSearchResults};
    const currentDisplayedBookValue = {currentDisplayedBook,setCurrentDisplayedBook};

    const checkout = () => console.log('yes');
    const search = () => setCurrentPage('lookup');
    const account = () => setCurrentPage('createAccount');
    const holds = () => setCurrentPage('holds/floats');
    const reset = () => setCurrentPage('libHub');

    switch (currentPage) {
        case 'checkout':
        return(
            <p onClick={reset}>The number 1</p>
        );
        break;

        case 'lookup':
        return(
            <CurrentSearchResultsContext.Provider value={currentSearchResultsValue}>
                <CurrentDisplayedBookContext.Provider value={currentDisplayedBookValue}>
                    <CurrentPageContext.Provider value={currentPageValue}>
                        <BookSearch/>
                    </CurrentPageContext.Provider>  
                </CurrentDisplayedBookContext.Provider>
            </CurrentSearchResultsContext.Provider>
        );
        break;

        case 'createAccount':
        return (
            <CurrentPageContext.Provider value={currentPageValue}>
                <CurrentSearchResultsContext.Provider value={currentSearchResultsValue}>
                    <MemberSignup/>
                </CurrentSearchResultsContext.Provider>
            </CurrentPageContext.Provider> 
        );
        break;

        case 'holds/floats':
        return(
            <CurrentPageContext.Provider value={currentPageValue}>
                <CurrentSearchResultsContext.Provider value={currentSearchResultsValue}>
                <HoldsList/>
                </CurrentSearchResultsContext.Provider>    
            </CurrentPageContext.Provider>  
        )

        default:
        return(
            <span>
                <CurrentPageContext.Provider value={currentPageValue}>
                    <CurrentSearchResultsContext.Provider value={currentSearchResultsValue}>
                    <Navbar></Navbar> 
                    <SlateGreyContainer width={'90%'} height={'70%'}>
                            <CurrentDisplayedBookContext.Provider value={currentDisplayedBookValue}>
                                <LibHubOptionDiv onClick={checkout}>Check out customer</LibHubOptionDiv>
                            </CurrentDisplayedBookContext.Provider>     
                        <LibHubOptionDiv onClick={search}>Look up book</LibHubOptionDiv>
                        <LibHubOptionDiv onClick={account}>Create customer account</LibHubOptionDiv>
                        <LibHubOptionDiv onClick={holds}>Check holds</LibHubOptionDiv>
                    </SlateGreyContainer>
                    </CurrentSearchResultsContext.Provider>
                </CurrentPageContext.Provider>
            </span>

        );
    }
}

export default LibrarianHub