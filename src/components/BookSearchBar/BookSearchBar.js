import {useState,useContext} from 'react';
import { CurrentSearchResultsContext,CurrentDisplayedBookContext } from '../LibrarianHub/LibrarianHub';
import SearchInput from '../../styled-components/SearchInput/SearchInput.js';
import Button from '../../styled-components/Button/Button.js';
import BookSearch from '../../styled-components/BookSearch/BookSearch';
import RadioInput from '../../styled-components/RadioInput/RadioInput';
import Axios from 'axios';

const SearchBar = () => {
    const [search,setSearch] = useState('');
    const {currentSearchResults,setCurrentSearchResults} = useContext(CurrentSearchResultsContext);
    const {currentDisplayedBook,setCurrentDisplayedBook} = useContext(CurrentDisplayedBookContext);
    const [searchType,setSearchType] = useState('book');

    let bookQuery = (e) => {
        e.preventDefault();
        console.log(searchType);
        Axios.get('http://localhost:8000/api/books',
        {params:{
            query: search,
            queryType: searchType
        }}).then((res) => {
            setCurrentSearchResults(res.data);    
        }).catch((err) => console.log(err));
    };

    let searchHandler = (e) => {
        setSearch(e.target.value);
    };

    let radioHandler = (e) => {
        setSearchType(e.target.value);
    };

    return(
        <BookSearch>
            <RadioInput type='radio' id='book' name='searchType' value='Book' onClick={radioHandler}></RadioInput>
            <label htmlFor='Books'>Books</label>
            <RadioInput type='radio' id='author' name='searchType' value='Author' onClick={radioHandler}></RadioInput>
            <label htmlFor='author'>Author</label>
            <SearchInput onChange={searchHandler} placeholder='Search Here'></SearchInput>
            <Button width={'5em'} height={'3em'} onClick={bookQuery} margin={'1em'}>Search</Button>         
        </BookSearch>    
    )
}

export default SearchBar