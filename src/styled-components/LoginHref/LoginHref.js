import styled from 'styled-components';

const LoginHref = styled.a`
    position: absolute;
    right:${(props) => props.right ? props.right : ''};
    bottom: ${(props) => props.bottom ? props.bottom : ''};
    color: white;
`;

export default LoginHref;