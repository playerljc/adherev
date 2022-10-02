import Space from '@baifendian/adherev-ui-space';

import FunctionProps from '../FunctionProps';
import Section, { SectionPropTypes } from './Section';

const FunctionPropsSection: any = {
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
      <Section title={title} extra={extra}>
        <Space.Group direction="vertical">
          {(config || []).map((c, index) => (
            <FunctionProps key={index + 1} {...{ props: c }} />
          ))}
        </Space.Group>
      </Section>
    );
  },
};

export default FunctionPropsSection;
