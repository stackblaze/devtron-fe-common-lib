import { FC, SVGProps } from 'react';
type IllustrationMap = Record<string, FC<SVGProps<SVGSVGElement>> | string>;
export interface IllustrationBaseProps {
    /**
     * The name of the illustration to render.
     * @note The component will return either an img component or an SVG component based on the type of illustration (.svg, .webp)
     */
    name: keyof IllustrationMap;
    /**
     * A map containing all available illustrations.
     */
    illustrationMap: IllustrationMap;
    /**
     * A unique identifier for testing purposes, typically used in test automation.
     */
    dataTestId?: string;
    /**
     * Additional props to pass to the image element.
     * @note This prop is only used when the illustration is a .webp image.
     */
    imageProps?: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>;
    /**
     * Additional props to pass to the SVG element.
     */
    svgProps?: React.SVGProps<SVGSVGElement>;
}
export {};
