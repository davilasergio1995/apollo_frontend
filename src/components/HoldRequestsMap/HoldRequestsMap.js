import {useState,useEffect,createContext} from 'react';
import ExpandedHoldRequest from '../ExpandedHoldRequest/ExpandedHoldRequest';
import HoldFloat from '../HoldFloat/HoldFloat';
import Axios from 'axios';
import Cookies from 'universal-cookie';
export const HoldRequestsContext = createContext();
export const FilteredRequestsContext = createContext();

const HoldRequestsMap = () => {
    const [holdRequests,setHoldRequests] = useState([]);
    const cookies = new Cookies();
    const accessToken = cookies.get('accessToken');
    const sessionID = cookies.get('sessionID');
    const currentLocation = cookies.get('currentLocation');
    const holdRequestsValue = {holdRequests,setHoldRequests};
    
    useEffect(() => {
        let unfilteredHolds = [];
        let filteredHolds = [];

        Axios.get(`http://localhost:8000/api/holdfloatget?currentLocation=${currentLocation}`,{headers:{
            'authorization': `Bearer: ${accessToken}`,
            'sessionID':sessionID
        }},{params:{
            currentLocation:currentLocation
        }}).then((res) => {
            setHoldRequests(res.data);
        }).catch((err) => {console.log(err)});
    },[]);

    const holdRequestsMap = holdRequests.map(e => <HoldFloat title={e.title}></HoldFloat>);

    return(
        <span>
            <HoldRequestsContext.Provider value={holdRequestsValue}>
                {holdRequestsMap} 
            </HoldRequestsContext.Provider>
        </span>  
    )
};

export default HoldRequestsMap;