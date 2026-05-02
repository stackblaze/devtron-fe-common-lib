import { FiltersTypeEnum, TableProps } from './types';
declare const TableWrapper: <RowData extends unknown = unknown, FilterVariant extends FiltersTypeEnum = FiltersTypeEnum.NONE, AdditionalProps extends Record<string, any> = {}>(tableProps: TableProps<RowData, FilterVariant, AdditionalProps>) => import("react/jsx-runtime").JSX.Element;
export default TableWrapper;
