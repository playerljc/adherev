declare namespace _default {
    namespace fetchList {
        const resCode: number;
        namespace data {
            import total = data.length;
            export { total };
            export const records: {
                id: any;
                name: any;
                sex: string;
                birthDay: any;
                deptName: any;
                height: any;
                width: any;
                hometown: any;
                address: any;
            }[];
        }
        const message: string;
    }
    namespace fetchDel {
        const resCode_1: number;
        export { resCode_1 as resCode };
        const data_2: boolean;
        export { data_2 as data };
        export const resMsg: string;
    }
    namespace fetchSave {
        const resCode_2: number;
        export { resCode_2 as resCode };
        const data_3: boolean;
        export { data_3 as data };
        const resMsg_1: string;
        export { resMsg_1 as resMsg };
    }
    namespace fetchUpdate {
        const resCode_3: number;
        export { resCode_3 as resCode };
        const data_4: boolean;
        export { data_4 as data };
        const resMsg_2: string;
        export { resMsg_2 as resMsg };
    }
    namespace fetchInfo {
        const resCode_4: number;
        export { resCode_4 as resCode };
        export namespace data_5 {
            const id: any;
            const name: any;
            const sex: string;
            const birthDay: any;
            const deptName: any;
            const height: any;
            const width: any;
            const hometown: any;
            const address: any;
            const hobby: number[];
            const department: string;
            const annex: {
                path: any;
                id: any;
                name: any;
            }[];
        }
        export { data_5 as data };
        const resMsg_3: string;
        export { resMsg_3 as resMsg };
    }
}
export default _default;
declare const data_1: any[];
