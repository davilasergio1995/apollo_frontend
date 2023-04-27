import {useState,useEffect,useContext,createContext} from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import HoldRequestDiv from '../../styled-components/HoldRequestDiv/HoldRequestDiv';
import Button from '../../styled-components/Button/Button';
import Input from '../../styled-components/Input/Input';
import {HoldRequestTypeContext} from '../DisplayedBook/DisplayedBook';
import { CurrentDisplayedBookContext,CurrentSearchResultsContext } from '../LibrarianHub/LibrarianHub';
import NonLocalHoldGen from '../NonLocalHoldGen/NonLocalHoldGen';
import BranchFloatGen from '../BranchFloatGen/BranchFloatGen';
export const FloatToLocationContext = createContext();
export const FloatFromLocationContext = createContext();

const HoldRequest = () => {

    const {holdRequestType,setHoldRequestType} = useContext(HoldRequestTypeContext);
    const {currentDisplayedBook,setCurrentDisplayedBook} = useContext(CurrentDisplayedBookContext);
    const {currentSearchResults,setCurrentSearchResults} = useContext(CurrentSearchResultsContext);
    const [userID,setUserID] = useState('');
    const [floatToLocation,setFloatToLocation] = useState('');
    const [floatFromLocation,setFloatFromLocation] = useState('');
    const cookies = new Cookies();
    const currentLocation = cookies.get('currentLocation');
    const accessToken = cookies.get('accessToken');
    const sessionID = cookies.get('sessionID');
    const floatToLocationValue = {floatToLocation,setFloatToLocation};
    const floatFromLocationValue = {floatFromLocation,setFloatFromLocation};

    const clearHoldRequestType = () => setHoldRequestType('');

    const userIDHandler = e => setUserID(e.target.value);

    let holdFloatRequest = () => {
        if (userID.length < 16) {
            alert('Invalid ID')
        };
        Axios.post('http://localhost:8000/api/holdfloatrequests',{
            request:{
                holdType: holdRequestType === 'local' ? 'hold' : 'float',
                floatToLocation: floatToLocation,
                floatFromLocation: floatFromLocation,
                holdLocation:holdRequestType === 'local' ? currentLocation : '',
                title:currentDisplayedBook[0],
                userID:userID,
                masterID:currentDisplayedBook[2],
            }
        },{headers:{
            'authorization': `Bearer: ${accessToken}`,
            'sessionID':sessionID
        }}).then((res) => {
            if (res.data === 'request successful') {
                setFloatToLocation('');
                setFloatFromLocation('');
                setCurrentDisplayedBook('');
                setCurrentSearchResults([]);
                alert('hold/float request successful');
            } else {
                alert('Hold request failed:',res.data);
            };
        }).catch((err) => console.log(err));
    }

    switch (holdRequestType) {
        case 'local':
        return(
        <HoldRequestDiv display='flex'>
            <Button position='absolute' top='.25em' right='.25em' width='2.5em' onClick={clearHoldRequestType}>X</Button>
            <label htmlFor='userID'>User ID:</label>
            <Input width='9em' height='3.5em' id='userID' placeholder='User ID' minlength='16' onChange={userIDHandler}></Input>
            <Button width='6em' height='4em' onClick={holdFloatRequest}>Request Hold</Button>
        </HoldRequestDiv>
        );

        case 'nonlocal':
        return(
        <HoldRequestDiv display='flex'>
            <p>Float Request</p>
            <Button position='absolute' top='.25em' right='.25em' width='2.5em' onClick={clearHoldRequestType}>X</Button>
            <FloatToLocationContext.Provider value={floatToLocationValue}>
                <BranchFloatGen/>
            </FloatToLocationContext.Provider>
            <FloatFromLocationContext.Provider value={floatFromLocationValue}>
                <NonLocalHoldGen/>
            </FloatFromLocationContext.Provider>
            <label htmlFor='userID'>User ID:</label>
            <Input width='9em' height='3.5em' id='userID' placeholder='User ID' minlength='16' onChange={userIDHandler}></Input>
            <Button width='6em' height='4em' onClick={holdFloatRequest}>Request Float</Button>
        </HoldRequestDiv> 
        );

        default:
        return(
        <HoldRequestDiv>
            <Button position='absolute' top='.25em' right='.25em' width='2.5em' onClick={clearHoldRequestType}>X</Button>
        </HoldRequestDiv>
        );
    };
};

export default HoldRequest;
