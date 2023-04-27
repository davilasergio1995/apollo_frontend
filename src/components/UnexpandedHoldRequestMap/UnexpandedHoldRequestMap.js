import {useState,useEffect} from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';
const UnexpandedHoldRequestMap = () => {
    const [holdRequests,setHoldRequests] = useState([]);
    const cookies = new Cookies();
    const accessToken = cookies.get('accessToken');
    const sessionID = cookies.get('sessionID');
    const currentLocation = cookies.get('currentLocation');
    
    useEffect(() => {
        let unfilteredHolds = [];
        let filteredHolds = [];

        Axios.get(`http://localhost:8000/api/holdfloatget?currentLocation=${currentLocation}`,{headers:{
            'authorization': `Bearer: ${accessToken}`,
            'sessionID':sessionID
        }},{params:{
            currentLocation:currentLocation
        }}).then((res) => unfilteredHolds = res.data).catch((err) => {console.log(err)});

        unfilteredHolds.forEach(e => e.forEach(f => f.holdLocation === currentLocation ? filteredHolds.push(f) : null));
        setHoldRequests(filteredHolds);

    },[]);
}