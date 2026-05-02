import { HTMLMotionProps } from 'framer-motion';
import { UsePopoverProps } from './types';
export declare const getPopoverAlignmentStyle: ({ position, alignment }: Pick<UsePopoverProps, "position" | "alignment">) => {
    right: number;
    left?: undefined;
    bottom?: undefined;
    top?: undefined;
} | {
    left: string;
    right?: undefined;
    bottom?: undefined;
    top?: undefined;
} | {
    left: number;
    right?: undefined;
    bottom?: undefined;
    top?: undefined;
} | {
    bottom: number;
    right?: undefined;
    left?: undefined;
    top?: undefined;
} | {
    top: string;
    right?: undefined;
    left?: undefined;
    bottom?: undefined;
} | {
    top: number;
    right?: undefined;
    left?: undefined;
    bottom?: undefined;
};
export declare const getPopoverPositionStyle: ({ position }: Pick<UsePopoverProps, "position">) => {
    bottom: string;
    marginBottom: number;
    right?: undefined;
    marginRight?: undefined;
    left?: undefined;
    marginLeft?: undefined;
    top?: undefined;
    marginTop?: undefined;
} | {
    right: string;
    marginRight: number;
    bottom?: undefined;
    marginBottom?: undefined;
    left?: undefined;
    marginLeft?: undefined;
    top?: undefined;
    marginTop?: undefined;
} | {
    left: string;
    marginLeft: number;
    bottom?: undefined;
    marginBottom?: undefined;
    right?: undefined;
    marginRight?: undefined;
    top?: undefined;
    marginTop?: undefined;
} | {
    top: string;
    marginTop: number;
    bottom?: undefined;
    marginBottom?: undefined;
    right?: undefined;
    marginRight?: undefined;
    left?: undefined;
    marginLeft?: undefined;
};
export declare const getPopoverFramerProps: ({ position, alignment }: Pick<UsePopoverProps, "position" | "alignment">) => {
    initial: {
        [x: string]: number;
        opacity: number;
    };
    animate: {
        [x: string]: number;
        opacity: number;
    };
    exit: {
        [x: string]: number;
        opacity: number;
    };
    transformTemplate: HTMLMotionProps<"div">["transformTemplate"];
};
export declare const getPopoverActualPositionAlignment: ({ position, alignment, triggerRect, popoverRect, }: Pick<UsePopoverProps, "position" | "alignment"> & {
    triggerRect: DOMRect;
    popoverRect: DOMRect;
}) => {
    fallbackPosition: "top" | "right" | "bottom" | "left";
    fallbackAlignment: "start" | "middle" | "end";
};
