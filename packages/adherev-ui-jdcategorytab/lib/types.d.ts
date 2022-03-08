export interface IMenuDataItem {
    key: string;
    name: string;
    properties: any;
}
export interface IComponent {
    isUse?(): boolean;
    use?(Vue: any): void;
    Item?: any;
}
