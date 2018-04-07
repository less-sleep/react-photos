import react, {Component} from 'react';
import styled from 'styled-components';
import _find from 'lodash/find';

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
        album: undefined,
    };

    createPhotos = photos => {
        const {album} = this.state;

        return photos.map(({id, title, url}) => {
            return (
                <ImageLink 
                    key={id}
                    id={id}
                    link={{pathname: '/photo', query: {albumId: album.id, photoId: id}}}
                    title={title}
                    imageUrl={url}
                />
            );
        });
    };

    update = data => {
        const {url} = this.props;

        this.setState(() => ({
            album: _find(data.albums, {id: url.query.id}),
        }));
    };

    /* getInitialProps = async ({req}) => {
        const res = await fetch('static/data.json');
        const json = await res.json();
        this.update(data);
    }; */

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
        const {album} = this.state;
        const photos = album ? album.photos : [];

        return (
            <Wrapper>
                <TitleBar title={'React Photos'} backLink={'/'} />
                {photos.length > 0 ? <Grid>{this.createPhotos(photos)}</Grid> : <p>No Photos</p>}
            </Wrapper>
        );
    }
}

export default AlbumPage;
