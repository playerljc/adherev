declare const HistoryBack: {
    isUse?(): boolean;
    use?(Vue: any): void;
    (history: any, routePath?: string): void;
};
export default HistoryBack;
