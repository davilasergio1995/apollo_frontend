import {useState,useEffect,useContext} from 'react';
import { CurrentDisplayedBookContext,CurrentSearchResultsContext } from '../LibrarianHub/LibrarianHub';
import { FloatFromLocationContext } from '../HoldRequest/HoldRequest';
import StyledSelect from '../../styled-components/StyledSelect/StyledSelect';
import StyledOption from '../../styled-components/StyledOption/StyledOption';
import Button from '../../styled-components/Button/Button';
import Cookies from 'universal-cookie';

const NonLocalHoldGen = () => {
    const {currentDisplayedBook,setCurrentDisplayedBook} = useContext(CurrentDisplayedBookContext);
    const {currentSearchResults} = useContext(CurrentSearchResultsContext);
    const [availableBranches,setAvailableBranches] = useState([]);
    const {floatFromLocation,setFloatFromLocation} = useContext(FloatFromLocationContext);

    const floatFromLocationHandler = e => {
        setFloatFromLocation(e.target.value);
    };

    useEffect(() => {
        let cookies = new Cookies();
        let tempAvailableBranches = [];
        setAvailableBranches(currentDisplayedBook[6]);
    },[]);

    const branchesMap = availableBranches.map(e => <StyledOption value={e}>{e}</StyledOption>);

    return(
        <StyledSelect width='9em' hmtlFor='availableBranches' name='Available Branches' id='availableBranches' onChange={floatFromLocationHandler}>
            <StyledOption value='Slct Branch' disabled selected hidden>Slct Branch</StyledOption>
            {branchesMap}
        </StyledSelect>
    )
};

export default NonLocalHoldGen;