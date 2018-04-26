import react, {Component, Fragment} from 'react';
import styled from 'styled-components';
import _find from 'lodash/find';

import Loading from '../components/Loading';
import TitleBar from '../components/TitleBar';
import Slide from '../components/Slide';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    flex-grow: 1;
    position: relative;
`;

class PhotoPage extends Component {
    static getInitialProps = async ({query}) => {
        const json = require('../static/data.json');
        const album = _find(json.albums, {id: query.albumId});

        return {baseUrl: json.baseUrl, photo: _find(album.photos, {id: query.photoId})};
    };

    render() {
        const {photo, baseUrl, url} = this.props;

        let content = undefined;

        if (photo) {
            content = (
                <Fragment>
                    <TitleBar title={photo.title} backLink={{pathname: `/album`, query: {id: url.query.albumId}}} />
                    <Content>
                        <Slide imageUrl={photo.url} baseUrl={baseUrl} title={photo.title} />
                    </Content>
                </Fragment>
            );
        } else {
            content = <Loading />;
        }

        return (
            <Wrapper>
                <TitleBar title={'React Photos'} />
                {content}
            </Wrapper>
        );
    }
}

export default PhotoPage;
