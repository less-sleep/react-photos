import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.header`
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: rgb(234, 234, 234) solid 1px;
    display: flex;
`;

const BackBtn = styled.a`
    height: 50px;
    width: 50px;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('/static/images/icon_back_arrow.svg');
    display: block;

    &:hover {
        background-color: rgb(234, 234, 234);
    }
`;

const Title = styled.h2`
    height: 100%;
    font-family: 'Roboto Condensed', Arial, Helvetica, Verdana, sans-serif;
    font-size: 1.2em;
    line-height: 1.2em;
    color: rgb(0, 0, 0);
    margin: 0 0 0 15px;
    padding: 3px 0 0;
    display: table;
`;

const TitleInner = styled.span`
    height: 100%;
    vertical-align: middle;
    display: table-cell;
`;

const TitleBar = props => {
    const {title, backLink} = props;

    return (
        <Wrapper>
            {backLink && <Link href={backLink}><BackBtn title="Back" /></Link>}
            <Title>
                <TitleInner>{title}</TitleInner>
            </Title>
        </Wrapper>
    );
};

export default TitleBar;
