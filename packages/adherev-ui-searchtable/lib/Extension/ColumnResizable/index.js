import SearchTableResizableColumnItem from './SearchTableResizableColumnItem';
import SearchTableResizableObserver from './SearchTableResizableObserver';
import SearchTableResizableTitle from './SearchTableResizableTitle';
class ColumnResizable {
    // 列的宽度
    columnsWidth = new Map();
    searchTableResizableColumnItem(context, index, column) {
        return SearchTableResizableColumnItem({
            columnsWidth: this.columnsWidth,
            context,
            index,
            column,
        });
    }
}
export default ColumnResizable;
export { SearchTableResizableTitle, SearchTableResizableObserver };
//# sourceMappingURL=index.js.map