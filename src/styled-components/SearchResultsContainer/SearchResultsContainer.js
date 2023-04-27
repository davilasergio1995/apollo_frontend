import styled from "styled-components";

const SearchResultsContainer = styled.div`
    position:fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: space-around;
    justify-content: space-around; 
    bottom:0;
    background-color: #3a5b62;
    border-top: solid .5px black;
    width: 100%;
    height: 36.5em;
    overflow:auto;
`;

export default SearchResultsContainer;