import {useState,useContext} from 'react';
import { CurrentDisplayedBookContext } from '../LibrarianHub/LibrarianHub';
import { FloatToLocationContext } from '../HoldRequest/HoldRequest';
import StyledSelect from '../../styled-components/StyledSelect/StyledSelect';
import StyledOption from '../../styled-components/StyledOption/StyledOption';

const BranchFloatGen = () => {

    const {floatToLocation,setFloatToLocation} = useContext(FloatToLocationContext);
    const {currentDisplayedBook} = useContext(CurrentDisplayedBookContext);
    const nonLocalToHoldMap = currentDisplayedBook[5].map(e => <StyledOption value={e}>{e}</StyledOption>);

    const floatToLocationHandler = (e) => setFloatToLocation(e.target.value);

    return(
        <StyledSelect width='9em' htmlFor='targetBranch' name='Target Branch' id='targetBranch' onChange={floatToLocationHandler}>
            <StyledOption value='Slct Branch' disabled selected hidden>Slct Target Branch</StyledOption>
            {nonLocalToHoldMap}
        </StyledSelect>
    );
};

export default BranchFloatGen;