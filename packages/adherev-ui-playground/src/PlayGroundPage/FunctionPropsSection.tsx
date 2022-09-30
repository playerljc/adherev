import { defineComponent } from 'vue';
import { array } from 'vue-types';

import Space from '@baifendian/adherev-ui-space';

import FunctionProps, { IDataItemType } from '../FunctionProps';
import Section, { sectionProps } from './Section';

const functionPropsSectionProps = {
  ...sectionProps,
  config: array<IDataItemType>().def([]),
};

export default defineComponent({
  name: 'adv-playground-page-function-props-section',
  props: functionPropsSectionProps,
  setup(props) {
    return () => (
      <Section title={props.title} extra={props.extra}>
        <Space.Group direction="vertical">
          {(props.config || []).map((c, index) => (
            <FunctionProps key={index + 1} {...c} />
          ))}
        </Space.Group>
      </Section>
    );
  },
});
