declare const _default: {
    updatedEx: {
        created(): void;
        updated(): void;
    };
    watchEffect: {
        data(): {
            $watchHandlers: never[];
        };
        created(): void;
        beforeDestroy(): void;
    };
    forceUpdate: {
        methods: {
            _$forceUpdate(): void;
        };
    };
};
export default _default;
