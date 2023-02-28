import { PropType } from 'vue';
declare const _default: {
    name: string;
    props: {
        autoCompleteProps: {
            type: PropType<AutoCompleteProps>;
            default: () => {};
        };
        value: {
            type: PropType<{
                inputValue: string;
                selectValue: string | number;
            }>;
            default: () => {
                inputValue: string;
                selectValue: string;
            };
        };
        dataSource: {
            type: ArrayConstructor;
            default: () => never[];
        };
    };
    computed: {
        options(): {
            text: any;
            value: string;
        }[];
        autoCompleteValue(): any;
    };
    methods: {
        onSelect(selectValue: any): void;
        onSearch(searchText: any): void;
        onChange(): void;
    };
    render(h: any): any;
};
export default _default;
