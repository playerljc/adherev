import { App } from 'vue';
declare const Resource: {
    install?: (app: App) => void;
    isUse?: () => boolean;
    use?: (Vue: any) => void;
    Dict: any;
};
export default Resource;
