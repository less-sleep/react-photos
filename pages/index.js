import react, {Component} from 'react';
import styled from 'styled-components';

import Loading from '../components/Loading';
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
        baseUrl: '',
        albums: [],
    };

    createAlbums = (albums, baseUrl) => {
        return albums.map(({id, title, photos}) => {
            return (
                <ImageLink
                    key={id}
                    id={id}
                    link={{pathname: '/album', query: {id}}}
                    title={title}
                    imageUrl={photos[0] ? photos[0].url : undefined}
                    baseUrl={baseUrl}
                />
            );
        });
    };

    update = data => {
        this.setState({
            baseUrl: data.baseUrl,
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
        console.log(this.props);
        const {albums, baseUrl} = this.state;

        let content = undefined;

        if (albums && albums.length > 0) {
            content = <Grid>{this.createAlbums(albums, baseUrl)}</Grid>;
        } else if (albums && albums.length === 0) {
            content = <Loading message={'No Albums'} />;
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

export default IndexPage;
