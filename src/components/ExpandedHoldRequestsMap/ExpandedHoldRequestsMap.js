import {useState,useEffect,useContext} from 'react';
import { HoldRequestsContext } from '../HoldRequestsMap/HoldRequestsMap';
import ExpandedHoldRequest from '../ExpandedHoldRequest/ExpandedHoldRequest';
import Cookies from 'universal-cookie';

const ExpandedHoldRequestsMap = (props) => {
    const {holdRequests,setHoldRequests} = useContext(HoldRequestsContext);
    const [filteredHolds,setFilteredHolds] = useState([]);
    const cookies = new Cookies();
    const currentLocation = cookies.get('currentLocation');

    useEffect(() => {
        let tempArr = holdRequests;
        let filteredTemp = [];
        tempArr.forEach(e => {if (props.title === e.title) {e.holdRequests.forEach(f => f.holdLocation === currentLocation ? filteredTemp.push(f) : null)}});
        setFilteredHolds(filteredTemp);
    },[]);
    
    const filteredHoldsMap = filteredHolds.map(e => <ExpandedHoldRequest userName={e.userName} expirationDate={e.expirationDate}></ExpandedHoldRequest>)

    return(
        <div>
            {filteredHoldsMap}
        </div>
    )
};

export default ExpandedHoldRequestsMap;