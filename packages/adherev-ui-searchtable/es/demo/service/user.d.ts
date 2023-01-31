export namespace fetchList {
    function call({ page, limit }: {
        page: any;
        limit: any;
    }): any;
    function defaultResult(): {
        total: number;
        records: never[];
    };
}
export namespace fetchDel {
    export function call_1(id: any, loading: any): any;
    export { call_1 as call };
    export function defaultResult_1(): boolean;
    export { defaultResult_1 as defaultResult };
}
export namespace fetchInfo {
    export function call_2(id: any, loading: any): any;
    export { call_2 as call };
    export function defaultResult_2(): {
        id: string;
        name: string;
        sex: string;
        birthDay: string;
        height: string;
        width: string;
        hometown: string;
        address: string;
        hobby: null;
        annex: never[];
    };
    export { defaultResult_2 as defaultResult };
}
export namespace fetchSave {
    export function call_3(params: any, loading: any): any;
    export { call_3 as call };
    export function defaultResult_3(): boolean;
    export { defaultResult_3 as defaultResult };
}
export namespace fetchUpdate {
    export function call_4(params: any, loading: any): any;
    export { call_4 as call };
    export function defaultResult_4(): boolean;
    export { defaultResult_4 as defaultResult };
}
declare namespace _default {
    const codeKey: string;
    const codeSuccessKey: number;
    const dataKey: string;
    const messageKey: string;
}
export default _default;
