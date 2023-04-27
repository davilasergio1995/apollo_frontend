import styled from "styled-components";

const HoldsFloatDiv = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    width:45em;
    height:8em;
    margin-top: 1.2em;
    border: solid 1.75px #1034a6;
    border-radius:${(props) => props.expanded ? '0':'15px'};
    border-bottom-left-radius:${(props) => props.expanded ? '0': '15px'};
    border-bottom-right-radius:${(props) => props.expanded ? '0': '15px'};
    border-top-left-radius:15px;
    border-top-right-radius:15px;
    background-color:#87dee7;
`;
export default HoldsFloatDiv;