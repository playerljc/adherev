import { VNode } from 'vue';
declare type dataKeys = {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
};
declare const _default: import("vue").DefineComponent<{
    isReply: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    defaultData: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dataKeys: import("vue-types").VueTypeValidableDef<dataKeys> & {
        default: () => dataKeys;
    };
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    fetchData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    fetchReply: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    keyProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    isMoreProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    local: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emojiPickerProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    comId: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    renderLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    loadMoreCollapseTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    loadMoreReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    showReplyTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    showReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    hideReplyTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    hideReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderActions: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | null>;
    renderAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderContent: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isReply: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    defaultData: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    dataKeys: import("vue-types").VueTypeValidableDef<dataKeys> & {
        default: () => dataKeys;
    };
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    fetchData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    fetchReply: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    keyProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    isMoreProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    local: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emojiPickerProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    comId: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    renderLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    loadMoreCollapseTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    loadMoreReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    showReplyTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    showReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    hideReplyTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    hideReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderActions: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | null>;
    renderAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderContent: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
}>>, {
    local: string;
    emojiPickerProps: {
        [key: string]: any;
    };
    isReply: boolean;
    defaultData: {
        [key: string]: any;
    };
    dataKeys: dataKeys;
    limit: number;
    keyProp: string;
    isMoreProp: string;
    comId: string | number;
}>;
export default _default;
