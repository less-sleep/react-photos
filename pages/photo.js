import react, {Component} from 'react';
import styled from 'styled-components';
import _find from 'lodash/find';

import TitleBar from '../components/TitleBar';
import Slide from '../components/Slide';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

class PhotoPage extends Component {
    state = {
        photo: undefined,
    };

    update = data => {
        const {url} = this.props;
        console.log(url, data)
        const album = _find(data.albums, {id: url.query.albumId});

        this.setState(() => ({
            photo: _find(album.photos, {id: url.query.photoId}),
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
        const {photo} = this.state;
        const {url} = this.props;
        console.log(photo)

        return (
            <Wrapper>
                <TitleBar title={'React Photos'} backLink={{pathname: '/album', query: {id: url.query.albumId}}} />
                {photo ? <Slide imageUrl={photo.url} /> : <p>No Photo</p>}
            </Wrapper>
        );
    }
}

export default PhotoPage;
