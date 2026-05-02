import { RefObject } from 'react';
import { Plugin } from 'chart.js';
import { AppThemeType } from '../../Providers';
import { CenterTextConfig, ChartType, ReferenceLineConfigType } from './types';
export declare const drawReferenceLine: (config: ReferenceLineConfigType, id: string, appTheme: AppThemeType) => Plugin;
export declare const htmlLegendPlugin: (id: string, ref: RefObject<HTMLDivElement>, type: ChartType) => Plugin;
export declare const drawCenterText: (config: CenterTextConfig, appTheme: AppThemeType) => Plugin;
