import React from 'react';

interface ImageProps {
    imgSrc: string;
    pt: string | number;
}

const Image: React.FC<ImageProps> = ({ imgSrc, pt }) => {
    return (
        <div className="custom-image" style={{ paddingTop: pt }}>
            <img src={imgSrc} alt="" />
        </div>
    );
};

export default Image;
