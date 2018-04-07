import styled from 'styled-components';

const IMAGE_WIDTH = '100%';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgb(235, 235, 235);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.imageUrl});
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

const Picture = styled.a`
    width: 100%;
    z-index: 1;
`;

const Image = props => {
    const {title, imageUrl, index} = props;

    let markup = undefined;
    const title_markup = <Title>{title}</Title>;

    return (
        <Wrapper imageUrl={imageUrl} data-index={index}>
            {title_markup}
        </Wrapper>
    );
};

export default Image;