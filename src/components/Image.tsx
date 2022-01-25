import React from 'react';

interface IImageProps {
  className?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
}

const fallbackSrc = '/images/Fallback-Image-Track-500.jpeg';

const Image: React.FC<IImageProps> = ({ className, src, alt, width, height, loading = 'lazy' }) => {
  const [image, setImage] = React.useState(src);

  const onError = () => {
    setImage(fallbackSrc);
  };

  if (!image) {
    return null;
  }
    
  return <img className={className} src={image} alt={alt} width={width} height={height} loading={loading} onError={onError} crossOrigin='anonymous' />;
};

export default Image;