import { getCurrentInstance } from 'vue';

export default () => {
  const instance = getCurrentInstance();

  return () => {
    // @ts-ignore
    instance?.ctx?._$forceUpdate?.();
  };
};
