import classNames from 'classnames';
const selectorPrefix = 'adherev-ui-scrollload';

export default {
  props: {},
  render(h) {
    return (
      // @ts-ignore
      <div
        class={classNames(
          selectorPrefix,
          // @ts-ignore
          className.split(' '),
        )}
      ></div>
    );
  },
};
