import react, {Component} from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

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
    static getInitialProps = async ({query}) => {
        const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';
        const res = await fetch(`${baseUrl}/static/data.json`);
        const json = await res.json();

        return {baseUrl, imageBaseUrl: json.baseUrl, albums: [...json.albums]};
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

    render() {
        const {albums, imageBaseUrl} = this.props;

        let content = undefined;

        if (albums && albums.length > 0) {
            content = <Grid>{this.createAlbums(albums, imageBaseUrl)}</Grid>;
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
