declare namespace _default {
    function create(): Memo;
    function create(): Memo;
}
export default _default;
declare class Memo {
    memo: any[];
    isEmpty(): boolean;
    add(path: any, components: any): void;
    findByPath(path: any): any;
    findIndexByPath(path: any): number;
    deleteByIndex(index: any): any[];
}
