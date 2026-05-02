import { ChartProps } from './types';
/**
 * A versatile Chart component that renders different types of charts using Chart.js.
 * Supports area charts, pie charts, semi-pie charts, stacked bar charts (vertical/horizontal), and line charts.
 *
 * The component automatically adapts to theme changes and provides consistent styling
 * across all chart types. Colors are provided by the user through the CHART_COLORS constant
 * or custom color tokens.
 *
 * @example
 * ```tsx
 * [Area Chart Example]
 * <Chart
 *   id="quarterly-growth"
 *   type="area"
 *   xAxisLabels={['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023']}
 *   datasets={[{
 *     datasetName: 'Revenue Growth (%)',
 *     yAxisValues: [15.2, 18.7, 22.3, 19.8],
 *     backgroundColor: 'LavenderPurple300'
 *   }]}
 * />
 *
 * [Pie Chart Example]
 * <Chart
 *   id="technology-adoption"
 *   type="pie"
 *   xAxisLabels={['React', 'Vue.js', 'Angular']}
 *   datasets={{
 *     datasetName: 'Adoption Rate (%)',
 *     yAxisValues: [45.2, 28.7, 35.4],
 *     colors: ['SkyBlue300', 'AquaTeal400', 'LavenderPurple300']
 *   }}
 * />
 *
 * [Semi-Pie Chart Example with Center Text]
 * <Chart
 *   id="performance-metrics"
 *   type="semiPie"
 *   xAxisLabels={['Good', 'Average', 'Poor']}
 *   datasets={{
 *     datasetName: 'Performance Score (%)',
 *     yAxisValues: [65, 25, 10],
 *     colors: ['LimeGreen500', 'GoldenYellow400', 'CoralRed400']
 *   }}
 *   centerText={{
 *     text: '85%',
 *     fontSize: 24,
 *     fontWeight: '600'
 *   }}
 * />
 *
 * [Line Chart Example (non-stacked, non-filled)]
 * <Chart
 *   id="traffic-trends"
 *   type="line"
 *   xAxisLabels={['Jan', 'Feb', 'Mar', 'Apr']}
 *   datasets={[{
 *     datasetName: 'Website Traffic',
 *     yAxisValues: [120, 190, 300, 500],
 *     borderColor: 'SkyBlue500'
 *   }]}
 * />
 *
 * [Stacked Bar Chart Example]
 * <Chart
 *   id="team-allocation"
 *   type="stackedBar"
 *   xAxisLabels={['Q1', 'Q2', 'Q3', 'Q4']}
 *   datasets={[
 *     {
 *       datasetName: 'Frontend',
 *       yAxisValues: [120, 150, 180, 200],
 *       backgroundColor: 'SkyBlue600'
 *     },
 *     {
 *       datasetName: 'Backend',
 *       yAxisValues: [80, 100, 120, 140],
 *       backgroundColor: 'AquaTeal600'
 *     }
 *   ]}
 * />
 * ```
 *
 * @param id - Unique identifier for the chart canvas element
 * @param type - Chart type: 'area', 'pie', 'semiPie', 'stackedBar', 'stackedBarHorizontal', or 'line'
 * @param xAxisLabels - Array of labels for the x-axis (or categories for pie/semi-pie charts)
 * @param datasets - Chart data: array of datasets for most charts, single dataset object for pie/semi-pie charts
 *
 * @performance
 * **Memoization Recommendations:**
 * - `xAxisLabels`: Should be memoized with useMemo() if derived from complex calculations
 * - `datasets`: Should be memoized with useMemo() as it contains arrays and objects that cause re-renders
 * - Avoid passing inline objects or arrays directly to these props
 *
 * @example
 * ```tsx
 * [Good: Memoized props prevent unnecessary re-renders]
 * const labels = useMemo(() => quarters.map(q => `Q${q}`), [quarters])
 * const chartDatasets = useMemo(() => [
 *   {
 *     datasetName: 'Revenue',
 *     yAxisValues: revenueData,
 *     backgroundColor: 'LavenderPurple300'
 *   }
 * ], [revenueData])
 *
 * return <Chart id="revenue-chart" type="area" xAxisLabels={labels} datasets={chartDatasets} />
 * ```
 *
 * @notes
 * - Chart automatically re-renders when theme changes (light/dark mode)
 * - Line charts are rendered as non-stacked and non-filled by default
 * - Pie and semi-pie charts expect a single dataset object instead of an array
 * - Semi-pie charts render as half-circles, ideal for gauges or progress indicators
 * - Center text can be added to pie and semi-pie charts using the centerText prop
 * - Colors should reference CHART_COLORS tokens for consistency
 * - Component destroys and recreates Chart.js instance on prop changes for optimal performance
 */
declare const Chart: (props: ChartProps) => import("react/jsx-runtime").JSX.Element;
export default Chart;
