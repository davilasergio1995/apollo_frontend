import {useState,useEffect,useContext} from 'react';
import Navbar from '../Navbar/Navbar';
import SlateGreyContainer from '../../styled-components/SlateGreyContainer/SlateGreyContainer';
import HoldsListDiv from '../../styled-components/HoldsListDiv/HoldsListDiv';
import HoldFloat from '../HoldFloat/HoldFloat';
import HoldRequestsMap from '../HoldRequestsMap/HoldRequestsMap';
import HoldOptionsContainerDiv from '../../styled-components/HoldOptionsContainerDiv/HoldOptionsContainerDiv';

const HoldsList = () => {
    return(
        <div>
        <Navbar></Navbar>
        <HoldOptionsContainerDiv>
        </HoldOptionsContainerDiv>
        <HoldsListDiv>
            <HoldRequestsMap></HoldRequestsMap>
        </HoldsListDiv>
        </div>
       
    )
};

export default HoldsList;