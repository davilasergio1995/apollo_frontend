import {useState,useEffect,useContext} from 'react';
import HoldsFloatDiv from '../../styled-components/HoldsFloatDiv/HoldsFloatDiv';
import BookImagePreview from '../../styled-components/BookImagePreview/BookImagePreview';
import NameHoldsDiv from '../../styled-components/NameHoldsDiv/NameHoldsDiv';
import ExpandedHoldDiv from '../../styled-components/ExpandedHoldDiv/ExpandedHoldDiv';
import Button from '../../styled-components/Button/Button';
import placeholder from '../../book_image_placeholder.png';
import ExpandedHoldContainerDiv from '../../styled-components/ExpandedHoldContainerDiv/ExpandedHoldContainerDiv';
import ExpandedHoldRequestsMap from '../ExpandedHoldRequestsMap/ExpandedHoldRequestsMap';
import { HoldRequestsContext } from '../HoldRequestsMap/HoldRequestsMap';

const HoldFloat = (props) => {
    const [expanded,setExpanded] = useState(false);
    const {holdRequests,setHoldRequests} = useContext(HoldRequestsContext);

    const expandedHandler = () => setExpanded(!expanded);

    if (!expanded) {
        return(
        <HoldsFloatDiv expanded={expanded}>
            <BookImagePreview src={placeholder} width='4em' height='6em'/>
            <NameHoldsDiv>
                <p>{props.title}</p>
            </NameHoldsDiv>
            <Button height='4em' width='4em' backgroundColor='#7289da' onClick={expandedHandler}>V</Button>
        </HoldsFloatDiv>
        )
    } else {
        return(
            <ExpandedHoldContainerDiv>
            <HoldsFloatDiv expanded={expanded}>
                <BookImagePreview src={placeholder} width='4em' height='6em'/>
                <NameHoldsDiv>
                    <p>{props.title}</p>
                </NameHoldsDiv>
                <Button height='4em' width='4em' backgroundColor='#7289da' onClick={expandedHandler}>Ʌ</Button>
            </HoldsFloatDiv>
            <ExpandedHoldRequestsMap title={props.title}></ExpandedHoldRequestsMap>
            </ExpandedHoldContainerDiv>
            
        )
    }
 
};

export default HoldFloat;