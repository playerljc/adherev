import { VNode } from 'vue';
import { FlexLayoutProps, ListProps } from '../types';
export declare const selectorPrefix = "adherev-ui-comment";
declare type dataKeys = {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
};
declare const _default: import("vue").DefineComponent<{
    getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    fetchCommentData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    commentDataKeys: import("vue-types").VueTypeValidableDef<dataKeys> & {
        default: () => dataKeys;
    };
    commentLimit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    commentKeyProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fetchReplyData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    replyDataKeys: import("vue-types").VueTypeValidableDef<dataKeys> & {
        default: () => dataKeys;
    };
    replyLimit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    replyKeyProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fetchReply: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    listProps: import("vue-types").VueTypeValidableDef<ListProps> & {
        default: () => ListProps;
    };
    isMoreProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    flexLayoutProps: import("vue-types").VueTypeValidableDef<FlexLayoutProps> & {
        default: () => FlexLayoutProps;
    };
    local: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emojiPickerProps: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    renderReplyLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderCommentLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    showReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    showReplyTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    hideReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    hideReplyTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    loadMoreReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    loadMoreCollapseTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderCommentActions: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentContent: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyActions: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyContent: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    fetchCommentData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    commentDataKeys: import("vue-types").VueTypeValidableDef<dataKeys> & {
        default: () => dataKeys;
    };
    commentLimit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    commentKeyProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fetchReplyData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    replyDataKeys: import("vue-types").VueTypeValidableDef<dataKeys> & {
        default: () => dataKeys;
    };
    replyLimit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    replyKeyProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fetchReply: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    listProps: import("vue-types").VueTypeValidableDef<ListProps> & {
        default: () => ListProps;
    };
    isMoreProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    flexLayoutProps: import("vue-types").VueTypeValidableDef<FlexLayoutProps> & {
        default: () => FlexLayoutProps;
    };
    local: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emojiPickerProps: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    renderReplyLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderCommentLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    showReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    showReplyTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    hideReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    hideReplyTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    loadMoreReplyText: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    loadMoreCollapseTextIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderCommentActions: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentContent: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyActions: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyContent: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
}>>, {
    local: string;
    emojiPickerProps: any;
    isMoreProp: string;
    flexLayoutProps: FlexLayoutProps;
    listProps: ListProps;
    commentDataKeys: dataKeys;
    commentLimit: number;
    commentKeyProp: string;
    replyDataKeys: dataKeys;
    replyLimit: number;
    replyKeyProp: string;
}>;
export default _default;
