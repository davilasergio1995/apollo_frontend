import {useState,useEffect,useContext, createContext} from 'react';
import Cookies from 'universal-cookie';
import { CurrentDisplayedBookContext,CurrentSearchResultsContext } from '../LibrarianHub/LibrarianHub';
import DisplayedBookDiv from '../../styled-components/DisplayedBookDiv/DisplayedBookDiv';
import BookImagePreview from '../../styled-components/BookImagePreview/BookImagePreview';
import StockResultsDiv from '../../styled-components/StockResultsDiv/StockResultsDiv';
import SearchResultTitleP from '../../styled-components/SearchResultTitleP/SearchResultTitleP';
import DisplayedBookP from '../../styled-components/DisplayedBookP/DisplayedBookP';
import Button from '../../styled-components/Button/Button';
import placeholder from '../../book_image_placeholder.png';
import HoldRequest from '../HoldRequest/HoldRequest';
export const HoldRequestTypeContext = createContext();

const DisplayedBook = () => {
    const {currentDisplayedBook,setCurrentDisplayedBook} = useContext(CurrentDisplayedBookContext);
    const {currentSearchResults} = useContext(CurrentSearchResultsContext);
    const [currentLocationStock,setCurrentLocationStock] = useState(0);
    const [totalAvailableStock,setTotalAvailableStock] = useState(0);
    const [holdRequestType,setHoldRequestType] = useState('');
    const holdRequestTypeValue = {holdRequestType,setHoldRequestType};

    const clearCurrentDisplayedBook = () => setCurrentDisplayedBook('');

    const localHold = () => setHoldRequestType('local');
    const nonLocalHold = () => setHoldRequestType('nonlocal');

    useEffect(() => {
        const cookies = new Cookies();
        let currentLocation = cookies.get('currentLocation');
        //[props.title,props.index,props.masterID,props.branchStock.stock,props.totalStock]
        setCurrentLocationStock(currentDisplayedBook[3]);
        setTotalAvailableStock(currentDisplayedBook[4]);
    },[]);

    if (currentLocationStock > 0 && totalAvailableStock > 0) {
        return(
            <DisplayedBookDiv>
                <Button position='absolute' top='.25em' right='.25em' width='2.5em' onClick={clearCurrentDisplayedBook}>X</Button>
                <BookImagePreview src={placeholder} width='8em' height='10em'></BookImagePreview>
                <SearchResultTitleP></SearchResultTitleP>
                <StockResultsDiv>
                    <DisplayedBookP>Available at Current Branch:{currentLocationStock}</DisplayedBookP>
                    <DisplayedBookP>Total Available:{totalAvailableStock - currentLocationStock}</DisplayedBookP>
                </StockResultsDiv>
                <StockResultsDiv>
                    <Button width='8em' onClick={localHold}>Hold (current location)</Button>
                    <Button width='8em' onClick={nonLocalHold}>Hold (other location)</Button>
                </StockResultsDiv>
                <HoldRequestTypeContext.Provider value={holdRequestTypeValue}>
                    <HoldRequest></HoldRequest>
                </HoldRequestTypeContext.Provider>
            </DisplayedBookDiv>
        )
    } else if (currentLocationStock === 0 && totalAvailableStock > 0) {
        return(
            <DisplayedBookDiv>
                <Button position='absolute' top='.25em' right='.25em' width='2.5em' onClick={clearCurrentDisplayedBook}>X</Button>
                <BookImagePreview src={placeholder} width='8em' height='10em'></BookImagePreview>
                <SearchResultTitleP>{currentDisplayedBook[0]}</SearchResultTitleP>
                <StockResultsDiv>
                    <DisplayedBookP>Available at Current ranch:{currentLocationStock}</DisplayedBookP>
                    <DisplayedBookP>Total Available:{totalAvailableStock - currentLocationStock}</DisplayedBookP>
                </StockResultsDiv>
                <StockResultsDiv>
                    <Button width='8em' onClick={nonLocalHold}>Hold (other location)</Button>
                </StockResultsDiv>
                <HoldRequestTypeContext.Provider value={holdRequestTypeValue}>
                    <HoldRequest></HoldRequest>
                </HoldRequestTypeContext.Provider>
            </DisplayedBookDiv>
        )
    } else if (currentLocationStock > 0 && totalAvailableStock === 0) {
        return(
            <DisplayedBookDiv>
                <Button position='absolute' top='.25em' right='.25em' width='2.5em' onClick={clearCurrentDisplayedBook}>X</Button>
                <BookImagePreview src={placeholder} width='8em' height='10em'></BookImagePreview>
                <SearchResultTitleP>{currentDisplayedBook[0]}</SearchResultTitleP>
                <StockResultsDiv>
                    <DisplayedBookP>Available at Current Branch:{currentLocationStock}</DisplayedBookP>
                    <DisplayedBookP>Total Available:{totalAvailableStock - currentLocationStock}</DisplayedBookP>
                </StockResultsDiv>
                <StockResultsDiv>
                    <Button width='8em' onClick={localHold}>Hold (current location)</Button>
                </StockResultsDiv>
                <HoldRequestTypeContext.Provider value={holdRequestTypeValue}>
                    <HoldRequest></HoldRequest>
                </HoldRequestTypeContext.Provider>
            </DisplayedBookDiv>
        )
    } else {
        return(
            <DisplayedBookDiv>
                <Button position='absolute' top='.25em' right='.25em' width='2.5em' onClick={clearCurrentDisplayedBook}>X</Button>
                <BookImagePreview src={placeholder} width='8em' height='10em'></BookImagePreview>
                <SearchResultTitleP>{currentDisplayedBook[0]}</SearchResultTitleP>
                <StockResultsDiv>
                    <DisplayedBookP>Available at Current Branch:{currentLocationStock}</DisplayedBookP>
                    <DisplayedBookP>Total Available:{totalAvailableStock - currentLocationStock}</DisplayedBookP>
                </StockResultsDiv>
                <StockResultsDiv>
                    <Button onClick={nonLocalHold}width='8em'>Request Hold</Button>
                </StockResultsDiv>
                <HoldRequestTypeContext.Provider value={holdRequestTypeValue}>
                    <HoldRequest></HoldRequest>
                </HoldRequestTypeContext.Provider>
            </DisplayedBookDiv>
        )
    }   
};

export default DisplayedBook;