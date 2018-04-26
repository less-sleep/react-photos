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
    static getInitialProps = async ({query, req}) => {
        const json = require('../static/data.json');
        return {baseUrl: json.baseUrl, albums: [...json.albums]};
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
        const {albums, baseUrl} = this.props;

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
