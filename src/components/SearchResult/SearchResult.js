import { useState,useEffect,useContext } from 'react';
import { CurrentDisplayedBookContext } from '../LibrarianHub/LibrarianHub'; 
import SearchResultDiv from '../../styled-components/SearchResultDiv/SearchResultDiv';
import BookImagePreview from '../../styled-components/BookImagePreview/BookImagePreview';
import SearchResultTitleP from '../../styled-components/SearchResultTitleP/SearchResultTitleP';
import StockResultsDiv from '../../styled-components/StockResultsDiv/StockResultsDiv';
import Cookies from 'universal-cookie';
import placeholder from '../../book_image_placeholder.png';

const SearchResult = (props) => {
    const [hovered,setHovered] = useState(false);
    const {currentDisplayedBook,setCurrentDisplayedBook} = useContext(CurrentDisplayedBookContext);

    const displayedBookHandler = () => {
        // setCurrentDisplayedBook([props.title,props.index,props.masterID,props.branchStock,props.totalStock]);
        const cookies = new Cookies();
        let currentLocation = cookies.get('currentLocation');
        let foundBranchStock = props.branchStock.find(e => e.branch === currentLocation).stock;
        let branches = props.branchStock.map(e => e.branch);
        let stockedBranches = [];
        props.branchStock.forEach(e => e.stock > 0 ? stockedBranches.push(e.branch) : null);
        setCurrentDisplayedBook([props.title,props.index,props.masterID,foundBranchStock,props.availableStock,branches,stockedBranches]);
    };
    
    const flip = () => hovered ? setHovered(false) : setHovered(true);
    
    return(
        <SearchResultDiv onMouseEnter={flip} onMouseLeave={flip} hovered={hovered} onClick={displayedBookHandler}>
            <BookImagePreview src={placeholder} width="6em" height="8em"></BookImagePreview>
            <SearchResultTitleP>{props.title}</SearchResultTitleP>
        </SearchResultDiv>
    );
};

export default SearchResult;