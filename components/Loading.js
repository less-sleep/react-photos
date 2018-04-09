import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    width: 100%;
`;

const Loading = ({message = 'Loading'}) => {
    return <Wrapper>{message}</Wrapper>;
};

export default Loading;
