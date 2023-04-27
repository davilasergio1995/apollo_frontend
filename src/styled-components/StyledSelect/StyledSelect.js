import styled from "styled-components";

const StyledSelect = styled.select`
    border: solid 3px slateblue;
    border-radius: 10px;
    padding: .8em;
    width:${(props) => props.width};
    height:3.8em;
    htmlFor:${(props) => props.htmlFor};
    name:${(props) => props.name};
    id:${(props) => props.id};
`;

export default StyledSelect;