import React from 'react';



interface IImageProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    loading?: 'eager' | 'lazy';
}

const Image: React.FC<IImageProps> = ({ src, alt, width, height, loading = 'lazy' }) => {
    const [image, setImage] = React.useState(src || '/images/Fallback-Image-Track-500.jpeg');

    const onError = () => {
        setImage('/images/Fallback-Image-Track-500.jpeg');
    };
    
    return <img src={image} alt={alt} width={width} height={height} loading={loading} onError={onError} crossOrigin='anonymous' />;
};

export default Image;