import { ExtractPropTypes } from 'vue';
import { imageLazyProps } from './imagelazy';
export interface IImgArgs {
    originSrc: string;
    errorSrc: string;
    targetSrc: string;
}
export declare type ImageLazyProps = Partial<ExtractPropTypes<typeof imageLazyProps>>;
