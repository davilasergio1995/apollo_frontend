import styled from 'styled-components';

const LibHubOptionDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d3ba6e;
    border: solid 1.75px black;
    border-radius: 12px;
    font-family Arial, Helvetica, sans-serif;
    color:white;
    width:15em;
    height:20em;
    margin: 2em;
    transform: ${(props) => props.hovered ? 'scale(1.05)' : 'scale(1)'};
    transition: all .1s;
`;

export default LibHubOptionDiv;