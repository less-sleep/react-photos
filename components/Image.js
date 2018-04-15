import styled from 'styled-components';

const IMAGE_WIDTH = '100%';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgb(235, 235, 235);
    overflow: hidden;
`;

const Title = styled.h3`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    font-family: 'Roboto Condensed', Arial, Helvetica, Verdana, sans-serif;
    font-size: 1.4em;
    line-height: 1.4em;
    color: rgb(255, 255, 255);
    margin: 0;
    padding: 15px 18px 12px;
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.75) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.75) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 ); /* IE6-9 */
    z-index: 1;
`;

const Picture = styled.picture`
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const Image = ({title, baseUrl, imageUrl, index}) => {
    let markup = undefined;
    const title_markup = <Title>{title}</Title>;

    return (
        <Wrapper data-index={index}>
            {imageUrl && (
                <Picture>
                    <source media={'(min-width: 1200px)'} srcSet={`${baseUrl}/w_300/${imageUrl}`} />
                    <source media={'(min-width: 800px)'} srcSet={`${baseUrl}/w_400/${imageUrl}`} />
                    <source media={'(min-width: 480px)'} srcSet={`${baseUrl}/w_480/${imageUrl}`} />
                    <img src={`${baseUrl}/${imageUrl}`} alt={title} />
                </Picture>
            )}
            {title_markup}
        </Wrapper>
    );
};

export default Image;
