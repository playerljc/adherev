// export default {
//   render(h) {
//     // console.log('row', this.$parent.$parent.$vnode.data.props);
//
//     console.log('row1', this.$parent);
//     console.log('row2', this.$parent.$parent);
//     console.log('root', this.$root);
//
//     return <tr>{this.$slots.default}</tr>;
//   },
// };

export default {
  inject: ['getContext'],
  computed: {
    props() {
      return this.getContext?.()?.onRow?.(this.$parent.rowKey);
    },
  },
  render(h) {
    return <tr>{this.$slots.default}</tr>;
  },
};
