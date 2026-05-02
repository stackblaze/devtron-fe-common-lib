import { ReactNode } from 'react';
import { ChartDataset, ChartOptions, ChartType as ChartJSChartType, Point, TooltipOptions } from 'chart.js';
import { ChartType, GetDefaultOptionsParams, TransformDataForChartProps } from './types';
export declare const getChartJSType: (type: ChartType) => ChartJSChartType;
export declare const getDefaultOptions: ({ chartProps, appTheme, externalTooltipHandler, setTooltipVisible, }: GetDefaultOptionsParams) => ChartOptions;
export declare const transformDataForChart: (props: TransformDataForChartProps) => (ChartDataset<"line"> | {
    backgroundColor?: string | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasGradient> | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasPattern> | ((ctx: import('chart.js').ScriptableContext<"line">, options: import('chart.js/dist/types/basic').AnyObject) => import('chart.js').Color) | readonly (string | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasGradient> | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasPattern>)[];
    borderColor?: string | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasGradient> | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasPattern> | ((ctx: import('chart.js').ScriptableContext<"line">, options: import('chart.js/dist/types/basic').AnyObject) => import('chart.js').Color) | readonly (string | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasGradient> | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasPattern>)[];
    pointBackgroundColor?: string | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasGradient> | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasPattern> | ((ctx: import('chart.js').ScriptableContext<"line">, options: import('chart.js/dist/types/basic').AnyObject) => import('chart.js').Color) | readonly (string | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasGradient> | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasPattern>)[];
    pointBorderColor?: string | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasGradient> | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasPattern> | ((ctx: import('chart.js').ScriptableContext<"line">, options: import('chart.js/dist/types/basic').AnyObject) => import('chart.js').Color) | readonly (string | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasGradient> | import('chart.js/dist/types/utils')._DeepPartialObject<CanvasPattern>)[];
    label: string;
    data: number[];
} | {
    backgroundColor: string[];
    hoverBackgroundColor: string[];
    borderColor: string;
    borderWidth: number;
    label: string;
    data: number[];
} | {
    backgroundColor: string;
    hoverBackgroundColor: string;
    borderColor: string;
    borderWidth?: undefined;
    label: string;
    data: number[];
})[];
export declare function chartColorGenerator(): Generator<"DeepPlum400" | "DeepPlum500" | "DeepPlum100" | "DeepPlum200" | "DeepPlum300" | "DeepPlum50" | "DeepPlum600" | "DeepPlum700" | "DeepPlum800" | "DeepPlum900" | "DeepPlum950" | "Magenta400" | "Magenta500" | "Magenta100" | "Magenta200" | "Magenta300" | "Magenta50" | "Magenta600" | "Magenta700" | "Magenta800" | "Magenta900" | "Magenta950" | "Slate400" | "Slate500" | "Slate100" | "Slate200" | "Slate300" | "Slate50" | "Slate600" | "Slate700" | "Slate800" | "Slate900" | "Slate950" | "Lavender400" | "Lavender500" | "Lavender100" | "Lavender200" | "Lavender300" | "Lavender50" | "Lavender600" | "Lavender700" | "Lavender800" | "Lavender900" | "Lavender950" | "SkyBlue400" | "SkyBlue500" | "SkyBlue100" | "SkyBlue200" | "SkyBlue300" | "SkyBlue50" | "SkyBlue600" | "SkyBlue700" | "SkyBlue800" | "SkyBlue900" | "SkyBlue950" | "AquaTeal400" | "AquaTeal500" | "AquaTeal100" | "AquaTeal200" | "AquaTeal300" | "AquaTeal50" | "AquaTeal600" | "AquaTeal700" | "AquaTeal800" | "AquaTeal900" | "AquaTeal950" | "LimeGreen400" | "LimeGreen500" | "LimeGreen100" | "LimeGreen200" | "LimeGreen300" | "LimeGreen50" | "LimeGreen600" | "LimeGreen700" | "LimeGreen800" | "LimeGreen900" | "LimeGreen950" | "CoralRed400" | "CoralRed500" | "CoralRed100" | "CoralRed200" | "CoralRed300" | "CoralRed50" | "CoralRed600" | "CoralRed700" | "CoralRed800" | "CoralRed900" | "CoralRed950" | "GoldenYellow400" | "GoldenYellow500" | "GoldenYellow100" | "GoldenYellow200" | "GoldenYellow300" | "GoldenYellow50" | "GoldenYellow600" | "GoldenYellow700" | "GoldenYellow800" | "GoldenYellow900" | "GoldenYellow950" | "CharcoalGray400" | "CharcoalGray500" | "CharcoalGray100" | "CharcoalGray200" | "CharcoalGray300" | "CharcoalGray50" | "CharcoalGray600" | "CharcoalGray700" | "CharcoalGray800" | "CharcoalGray900" | "CharcoalGray950" | "Gray400" | "Gray500" | "Gray100" | "Gray200" | "Gray300" | "Gray50" | "Gray600" | "Gray700" | "Gray800" | "Gray900" | "Gray950" | "SunsetOrange400" | "SunsetOrange500" | "SunsetOrange100" | "SunsetOrange200" | "SunsetOrange300" | "SunsetOrange50" | "SunsetOrange600" | "SunsetOrange700" | "SunsetOrange800" | "SunsetOrange900" | "SunsetOrange950", void, unknown>;
export declare const buildChartTooltipFromContext: ({ title, body, labelColors: labelColorsProp, }: Pick<Parameters<TooltipOptions["external"]>[0]["tooltip"], "title" | "body" | "labelColors">) => ReactNode;
export declare const distanceBetweenPoints: (pt1: Point, pt2: Point) => number;
