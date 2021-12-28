import * as React from 'react';

const Nlink = ({ linkUrl, image, text }) => (
    <a href={linkUrl}>
        {image.src && image.name && <img src={image.src} alt={image.name} />}
        {text && text}
    </a>
);

export default Nlink;
