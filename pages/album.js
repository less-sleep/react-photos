import react, {Component, Fragment} from 'react';
import styled from 'styled-components';
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
    state = {
        baseUrl: '',
        album: undefined,
    };

    createPhotos = (photos, baseUrl) => {
        const {album} = this.state;

        return photos.map(({id, title, url}) => {
            return (
                <ImageLink
                    key={id}
                    id={id}
                    link={{pathname: '/photo', query: {albumId: album.id, photoId: id}}}
                    title={title}
                    imageUrl={url}
                    baseUrl={baseUrl}
                />
            );
        });
    };

    update = data => {
        const {url} = this.props;

        this.setState(() => ({
            baseUrl: data.baseUrl,
            album: _find(data.albums, {id: url.query.id}),
        }));
    };

    componentDidMount() {
        fetch('/static/data.json')
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.update(json);
            });
    }

    render() {
        const {album, baseUrl} = this.state;
        const photos = album ? album.photos : [];

        let content = undefined;

        if (album && photos.length > 0) {
            content = (
                <Fragment>
                    <TitleBar title={album.title} backLink={'/'} />
                    {photos.length > 0 ? <Grid>{this.createPhotos(photos, baseUrl)}</Grid> : <p>No Photos</p>}
                </Fragment>
            );
        } else if (album && photos.length === 0) {
            content = (
                <Fragment>
                    <TitleBar title={album.title} backLink={'/'} />
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
