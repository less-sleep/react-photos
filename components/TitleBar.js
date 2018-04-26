import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.header`
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: rgb(234, 234, 234) solid 1px;
    display: flex;
    overflow: hidden;
`;

const BackBtn = styled.span`
    height: 50px;
    width: 50px;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('/static/images/icon_back_arrow.svg');
    border-right: rgb(234, 234, 234) solid 1px;
    cursor: pointer;
    display: block;

    &:hover {
        background-color: rgb(244, 244, 244);
    }
`;

const Title = styled.h2`
    height: 100%;
    font-family: 'Roboto Condensed', Arial, Helvetica, Verdana, sans-serif;
    font-size: 1.2em;
    line-height: 1.2em;
    margin: 0 0 0 15px;
    padding: 3px 0 0;
    align-items: center;
    display: flex;

    a,
    a:link,
    a:visited {
        color: rgba(0, 0, 0, 0.67);
        text-decoration: none;
    }

    a:hover {
        color: rgba(0, 0, 0, 1);
    }
`;

const TitleBar = props => {
    const {title, backLink} = props;

    return (
        <Wrapper>
            {backLink && (
                <Link href={backLink} prefetch>
                    <a>
                        <BackBtn title="Back" />
                    </a>
                </Link>
            )}
            <Title>
                <Link href={'/'} prefetch>
                    <a>{title}</a>
                </Link>
            </Title>
        </Wrapper>
    );
};

export default TitleBar;
