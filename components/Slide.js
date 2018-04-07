import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.imageUrl});
`;

const Slide = props => {
    const {imageUrl} = props;

    return <Wrapper imageUrl={imageUrl} />;
};

export default Slide;
