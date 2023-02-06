import { ExtractPropTypes } from 'vue';
import { jdCategoryTabItemProps } from './item';
import { jdCategoryTabProps } from './jdcategorytab';
export interface IMenuDataItem {
    key: string;
    name: string;
    properties: any;
}
export declare type JdCategoryTabProps = Partial<ExtractPropTypes<typeof jdCategoryTabProps>>;
export declare type JdCategoryTabItemProps = Partial<ExtractPropTypes<typeof jdCategoryTabItemProps>>;
