export const propTypes = {
  headerClassName: {
    type: String,
    default: '',
  },
  headerStyle: {
    type: String,
    default: '',
  },
  bodyClassName: {
    type: String,
    default: '',
  },
  bodyStyle: {
    type: String,
    default: '',
  },
  title: {
    type: [String, Object],
    default: '',
  },
  extra: {
    type: Object,
    default: () => null,
  },
  defaultCollapse: {
    type: Boolean,
    default: () => false,
  },
  border: {
    type: Boolean,
    default: () => false,
  },
  scrollY: {
    type: Boolean,
    default: () => false,
  },
  fixedHeaderScrollBody: {
    type: Boolean,
    default: () => false,
  },
};
