import react, {Component, Fragment} from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import _find from 'lodash/find';

import Loading from '../components/Loading';
import TitleBar from '../components/TitleBar';
import Grid from '../components/Grid';
import ImageLink from '../components/ImageLink';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

class AlbumPage extends Component {
    static getInitialProps = async ({query}) => {
        const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';
        const res = await fetch(`${baseUrl}/static/data.json`);
        const json = await res.json();

        return {baseUrl, imageBaseUrl: json.baseUrl, album: _find(json.albums, {id: query.id})};
    };

    createPhotos = (album, photos, baseUrl, imageBaseUrl) => {
        return photos.map(({id, title, url}) => {
            return (
                <ImageLink
                    key={id}
                    id={id}
                    link={{pathname: `${baseUrl}/photo`, query: {albumId: album.id, photoId: id}}}
                    title={title}
                    imageUrl={url}
                    baseUrl={imageBaseUrl}
                />
            );
        });
    };

    render() {
        const {baseUrl, album, imageBaseUrl} = this.props;
        const photos = album ? album.photos : [];

        let content = undefined;

        if (album && photos.length > 0) {
            content = (
                <Fragment>
                    <TitleBar title={album.title} backLink={`${baseUrl}/`} />
                    {photos.length > 0 ? (
                        <Grid>{this.createPhotos(album, photos, baseUrl, imageBaseUrl)}</Grid>
                    ) : (
                        <p>No Photos</p>
                    )}
                </Fragment>
            );
        } else if (album && photos.length === 0) {
            content = (
                <Fragment>
                    <TitleBar title={album.title} backLink={`${baseUrl}/`} />
                    <Loading message={'No Photos'} />
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

export default AlbumPage;
