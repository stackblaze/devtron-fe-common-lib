import { ImgHTMLAttributes, JSX } from 'react';
export interface ImageWithFallbackProps {
    /**
     * Props for the image
     */
    imageProps: Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'height' | 'width'> & Required<Pick<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'height' | 'width'>>;
    /**
     * Fallback image; can be a url or a jsx element
     */
    fallbackImage: string | JSX.Element;
}
