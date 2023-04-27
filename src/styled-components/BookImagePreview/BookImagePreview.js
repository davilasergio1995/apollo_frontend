import styled from 'styled-components';

const BookImagePreview = styled.img`
    src:${(props) => props.src};
    width:${(props) => props.width};
    height:${(props) => props.height};
`;

export default BookImagePreview;