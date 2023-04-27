import {useState,useContext} from 'react';
import { CurrentSearchResultsContext } from '../LibrarianHub/LibrarianHub';
import SearchResult from '../SearchResult/SearchResult';
import SearchResultsMapDiv from '../../styled-components/SearchResultsMapDiv/SearchResultsMapDiv';

const SearchResultsGen = () => {
    let {currentSearchResults} = useContext(CurrentSearchResultsContext);

    let searchResultsMap = currentSearchResults.map((e,index) => <SearchResult key={e.masterID} title={e.title} index={index} masterID={e.masterID} branchStock={e.branchStock} availableStock={e.availableStock}></SearchResult>);

    return(
        <SearchResultsMapDiv>
            {searchResultsMap}
        </SearchResultsMapDiv>
    );
};

export default SearchResultsGen;