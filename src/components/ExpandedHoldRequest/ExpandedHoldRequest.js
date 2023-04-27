import {useState} from 'react';
import Axios from 'axios';
import ExpandedHoldDiv from '../../styled-components/ExpandedHoldDiv/ExpandedHoldDiv';
import Button from '../../styled-components/Button/Button';
import OverlayDiv from '../../styled-components/OverlayDiv/OverlayDiv';
import HoldRequestDiv from '../../styled-components/HoldRequestDiv/HoldRequestDiv';
import Input from '../../styled-components/Input/Input';

const ExpandedHoldRequest = (props) => {
    const [confirmHold,setConfirmHold] = useState(false);

    const confirmHoldHandler = () => setConfirmHold(!confirmHold);

    if (!confirmHold) {
        return (
            <ExpandedHoldDiv>
                <p>{props.userName}</p>
                <p>{props.expirationDate}</p>
                <Button onClick={confirmHoldHandler}width='5.5em' height='3.5em'>Confirm Hold</Button>
            </ExpandedHoldDiv>  
        );
    } else {
        return(
            <span>
                <OverlayDiv>
                    <HoldRequestDiv display='flex'>
                        <Button position='absolute' top='1em' right='1em' width='3em' height='3em' onClick={confirmHoldHandler}>X</Button>
                        <label htmlFor='bookID'>Book ID:</label>
                        <Input width='9em' height='3.5em' id='bookID' placeholder='Book ID' minlength='16'></Input>
                    </HoldRequestDiv>
                </OverlayDiv>
                <ExpandedHoldDiv>
                    <p>{props.userName}</p>
                    <p>{props.expirationDate}</p>
                    <Button onClick={confirmHoldHandler}width='5.5em' height='3.5em'>Confirm Hold</Button>
                </ExpandedHoldDiv>  
                </span>
)          
    }
};

export default ExpandedHoldRequest;