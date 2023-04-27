import styled from 'styled-components';

const SlateGreyForm = styled.form`
    display:flex;
    flex-wrap:wrap;
    flex-direction:${(props) => props.flexDirection};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding:.5em;
    margin:auto;
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
    position: fixed;
    top: ${(props) => props.top ? props.top : '48%'};
    left: 50%;
    transform: translate(-50%,-50%);
    border:solid 2px black;
    border-radius: 10px;
    background-color:lightslategrey;
`;

export default SlateGreyForm