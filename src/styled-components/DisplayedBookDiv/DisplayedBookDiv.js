import styled from "styled-components";

const DisplayedBookDiv = styled.div`
    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    top:12%;
    left:34%;
    width:28em;
    height:32em;
    background-color:#dbdbdb;
    font-family:arial;
    border:solid 2px black;
    border-radius:8px;
    z-index:5;
`;

export default DisplayedBookDiv;