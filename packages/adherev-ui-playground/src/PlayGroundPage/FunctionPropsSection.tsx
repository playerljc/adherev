import Space from '@baifendian/adherev-ui-space';

import Section, { SectionPropTypes } from './Section';
import FunctionProps from '../FunctionProps';

export default {
  name: 'adv-playground-page-function-props-section',
  props: {
    ...SectionPropTypes,
    config: {
      type: Array,
      default: () => [],
    },
  },
  render(h) {
    const { title, extra, config } = this;

    return (
      // @ts-ignore
      <Section title={title} extra={extra}>
        <Space.Group direction="vertical">
          {(config || []).map((c, index) => (
            // @ts-ignore
            <FunctionProps key={index + 1} {...{ props: c }} />
          ))}
        </Space.Group>
      </Section>
    );
  },
};
