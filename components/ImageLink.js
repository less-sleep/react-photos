import styled from 'styled-components';
import Link from 'next/link';

import Image from '../components/Image';

const ImageLink = props => {
    const {id, title, link} = props;
    return (
        <Link href={link} prefetch>
            <a>
                <Image {...props} />
            </a>
        </Link>
    );
};

export default ImageLink;