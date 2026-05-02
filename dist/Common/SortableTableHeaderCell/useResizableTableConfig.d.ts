import { UseResizableTableConfigProps } from './types';
declare const useResizableTableConfig: ({ headersConfig }: UseResizableTableConfigProps) => {
    gridTemplateColumns: string;
    handleResize: (headerCellId: UseResizableTableConfigProps["headersConfig"][number]["id"], deltaChange: number) => void;
};
export default useResizableTableConfig;
