import react, {Component} from 'react';
import styled from 'styled-components';

import TitleBar from '../components/TitleBar';
import Grid from '../components/Grid';
import ImageLink from '../components/ImageLink';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

class IndexPage extends Component {
    state = {
        albums: [],
    };

    createAlbums = albums => {
        return albums.map(({id, title, photos}) => {
            return (
                <ImageLink
                    key={id}
                    id={id}
                    link={{pathname: '/album', query: {id}}}
                    title={title}
                    imageUrl={photos[0].url}
                />
            );
        });
    };

    update = data => {
        this.setState({
            albums: [...data.albums],
        });
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
        const {albums} = this.state;
        console.log(this.props);

        return (
            <Wrapper>
                <TitleBar title={'React Photos'} />
                {albums.length > 0 ? <Grid>{this.createAlbums(albums)}</Grid> : <p>No Albums</p>}
            </Wrapper>
        );
    }
}

export default IndexPage;
