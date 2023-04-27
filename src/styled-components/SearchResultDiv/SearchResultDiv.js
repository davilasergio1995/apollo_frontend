import styled from 'styled-components';

const SearchResultDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    height:16em;
    width: 13em;
    border: ${(props) => props.hovered ? 'solid 3px blue' : 'solid 3px black'};
    border-radius: 10px;
    margin: 1em;
    background-color:${(props) => props.hovered ? 'white' : '#A6BACB'};
    text-align:center;
    transform: ${(props) => props.hovered ? 'scale(1.05)' : 'scale(1)'};
    transition: all .1s;
`;

export default SearchResultDiv;