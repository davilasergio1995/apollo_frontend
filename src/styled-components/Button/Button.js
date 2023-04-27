import styled from 'styled-components'

const Button = styled.button`
    position:${(props) => props.position};
    top:${(props) => props.top};
    bottom:${(props) => props.bottom};
    left:${(props) => props.left};
    right:${(props) => props.right};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'black'};
    color: ${(props) => props.color ? props.color : 'white'};
    border: solid 2px slateblue;
    border-radius: 10px;
    padding: .5em;
    margin-left: ${(props) => props.marginLeft};
    margin-top: ${(props) => props.marginTop};
`;

export default Button;