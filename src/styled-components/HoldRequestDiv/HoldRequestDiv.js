import styled from 'styled-components';

const HoldRequestDiv = styled.div`
    display:${(props) => props.display ? props.display : 'none'};
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    position:fixed;
    left:36%;
    top:24%;
    width:24em;
    height:22em;
    background-color:#dbdbdb;
    font-family:Arial;
    border:solid 2px black;
    border-radius:10px;
`;

export default HoldRequestDiv;