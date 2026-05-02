import { ComponentSizeType } from '../../Shared/constants';
export type Entity = {
    color: string;
    label: string;
    value: number;
};
type EntityPropType = {
    hideLegend?: false;
    entities: NonNullable<Entity[]>;
} | {
    hideLegend: true;
    entities: NonNullable<Omit<Entity, 'label'> & {
        label?: never;
    }>[];
};
type ProportionalType = {
    isProportional?: true;
    hideTotal?: boolean;
} | {
    isProportional?: false | never;
    hideTotal?: never;
};
export type SegmentedBarChartProps = {
    rootClassName?: string;
    countClassName?: string;
    labelClassName?: string;
    swapLegendAndBar?: boolean;
    showAnimationOnBar?: boolean;
    isLoading?: boolean;
    size?: ComponentSizeType;
} & EntityPropType & ProportionalType;
export {};
