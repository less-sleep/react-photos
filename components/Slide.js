import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.imageUrl});
`;

const Picture = styled.picture`
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;

    img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`;

const Slide = props => {
    const {baseUrl, imageUrl, title} = props;

    return (
        <Wrapper>
            <Picture>
                <source media={'(min-width: 800px)'} srcSet={`${baseUrl}/w_1200/${imageUrl}`} />
                <source media={'(min-width: 480px)'} srcSet={`${baseUrl}/w_800/${imageUrl}`} />
                <source media={'(max-width: 480px)'} srcSet={`${baseUrl}/w_480/${imageUrl}`} />
                <img srcSet={`${baseUrl}/${imageUrl}`} alt={title} />
            </Picture>
        </Wrapper>
    );
};

export default Slide;
