import styled from 'styled-components';

const Wrapper = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;

    & > * {
        width: 100%;
        height: 220px;

        @media (min-width: 480px) {
            width: calc(100% / 2);
        }

        @media (min-width: 800px) {
            width: calc(100% / 3);
        }

        @media (min-width: 1200px) {
            width: calc(100% / 4);
        }

        @media (min-width: 1400px) {
            width: calc(100% / 5);
        }

        @media (min-width: 1600px) {
            width: calc(100% / 6);
        }
    }
`;

const Grid = props => {
    return <Wrapper>{props.children}</Wrapper>;
};

export default Grid;
