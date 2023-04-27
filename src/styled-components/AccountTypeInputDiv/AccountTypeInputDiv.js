import styled from "styled-components";

const AccountTypeInputDiv = styled.div`
    display:${(props) => props.display};
    margin: 1em;
    padding: 5px;
    border-radius: 10px;
    width: ${(props) => props.width ? props.width : '8em'};
`;

export default AccountTypeInputDiv;