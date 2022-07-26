import SearchTableResizableTitle from './SearchTableResizableTitle';
import SearchTableResizableObserver from './SearchTableResizableObserver';
declare class ColumnResizable {
    columnsWidth: Map<string, {
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    searchTableResizableColumnItem(context: any, index: number, column: any): any;
}
export default ColumnResizable;
export { SearchTableResizableTitle, SearchTableResizableObserver };
