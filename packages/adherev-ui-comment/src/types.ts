import type { CSSProperties, VNode } from 'vue';

export type Local =
  | 'ar'
  | 'de'
  | 'en'
  | 'es'
  | 'fa'
  | 'fr'
  | 'it'
  | 'ja'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ru'
  | 'uk'
  | 'zh'
  | string;

export interface CommentProps {
  getScrollWrapContainer?: () => HTMLElement;
  fetchCommentData?: () => Promise<any>;
  commentDataKeys?: {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
  };
  commentLimit?: number;
  commentKeyProp?: string;
  replyDataKeys?: {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
  };
  replyLimit?: number;
  replyKeyProp?: string;
  listProps?: any;
  isMoreProp?: string;
  flexLayoutProps?: object;
  local?: Local;
  emojiPickerProps?: any;
}

export interface ReplyProps {
  local?: Local;
  emojiPickerProps?: any;
}

export interface ListStandardProps {
  getScrollWrapContainer?: () => HTMLElement;
  flexLayoutProps?: object;
  listProps?: ListProps;
  limit?: number;
  renderList?: (params?: any) => VNode;
  renderEmpty?: () => VNode | null;
  renderFirstLoading?: () => VNode;
  fetchData?: (params?: any) => Promise<any>;
  renderLoading?: () => VNode | null;
  dataKeys?: {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
  };
}

export interface FlexLayoutProps {
  direction?: 'vertical' | 'horizontal';
}

export interface ListProps {
  getScrollWrapContainer?: () => HTMLElement;
  className?: string;
  style?: string;
  isLoading?: boolean;
  hasMore?: boolean;
  onLoadMore?: (handle?: (status?: string) => void) => void;
  renderFirstLoading?: () => VNode | null;
  scrollLoadProps?: object;
}

export interface NodeProps {
  isReply?: boolean;
  data?: {
    key: string;
  };
  dataKeys?: {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
  };
  renderLoading?: () => VNode | null;
  limit?: number;
  fetchData?: (params?: any) => Promise<any> | undefined;
  fetchReply?: (params?: any) => Promise<any>;
  keyProp?: string;
  isMoreProp?: string;
  renderActions?: (params: any, callback: (data?: any) => void) => VNode[] | null;
  renderAuthor?: (params?: any) => VNode | null;
  renderAvatar?: (params?: any) => VNode | null;
  renderContent?: (params?: any) => VNode | null;
  renderDateTime?: (params?: any) => VNode | null;
  children?: any;
  showReplyText?: string | Function;
  hideReplyText?: string | Function;
  loadMoreReplyText?: string | Function;
  showReplyTextIcon?: VNode | Function;
  hideReplyTextIcon?: VNode | Function;
  loadMoreCollapseTextIcon?: VNode | Function;
  local?: Local;
  emojiPickerProps?: any;
}

/**
 * ScrollLoadProps
 * @interface ScrollLoadProps
 */
export interface ScrollLoadProps {
  loadClassName?: string;
  loadStyle?: CSSProperties;
  emptyClassName?: string;
  emptyStyle?: CSSProperties;
  errorClassName?: string;
  errorStyle?: CSSProperties;
  distance?: number;
  getScrollContainer?: () => HTMLElement;
  onScrollBottom?: (handle?: (status?: string) => void) => void;
  onEmptyClick?: () => void;
  renderLoading?: VNode;
  renderEmpty?: VNode;
  renderError?: VNode;
}
