import Navbar from '../Navbar/Navbar';
import BookSearchBar from '../BookSearchBar/BookSearchBar';
import BooksDisplay from '../BooksDisplay/BooksDisplay';
import SearchResultsGen from '../SearchResultsGen/SearchResultsGen';

const BookSearch = () => {
    return(
        <div>
        <Navbar></Navbar>
            <BookSearchBar/>
            <BooksDisplay>
                <SearchResultsGen>
                </SearchResultsGen>
        </BooksDisplay>
        </div>
        
    )
};

export default BookSearch;