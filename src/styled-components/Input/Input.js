import styled from 'styled-components';

const Input = styled.input`
    width:${(props) => props.width};
    height:${(props) => props.height};
    id:${(props) => props.id};
    placeholder:${(props) => props.placeholder};
    padding:.7em;
    border:solid 2px slateblue;
    border-radius:9px;
`;

export default Input;