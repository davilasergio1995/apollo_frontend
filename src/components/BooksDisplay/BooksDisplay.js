import {useState,useContext} from 'react';
import { CurrentDisplayedBookContext } from '../LibrarianHub/LibrarianHub';
import SearchResultsContainer from '../../styled-components/SearchResultsContainer/SearchResultsContainer';
import DisplayedBook from '../DisplayedBook/DisplayedBook';
import OverlayDiv from '../../styled-components/OverlayDiv/OverlayDiv';

const BooksDisplay = (props) => {
    const {currentDisplayedBook,setCurrentDisplayedBook} = useContext(CurrentDisplayedBookContext);
    
    if (!currentDisplayedBook) {
        return(
            <SearchResultsContainer>{props.children}</SearchResultsContainer>
        )
    } else {
        return(
            <div>
                <OverlayDiv>
                    <DisplayedBook></DisplayedBook>
                </OverlayDiv>     
                <SearchResultsContainer>{props.children}</SearchResultsContainer> 
            </div>
                
        )
    }
    
};

export default BooksDisplay;