import { defineComponent } from 'vue';
import { array } from 'vue-types';

import Space from '@baifendian/adherev-ui-space';

import Props, { IDataItemType } from '../Props';
import Section, { sectionProps } from './Section';

const propsSectionProps = {
  ...sectionProps,
  config: array<IDataItemType>().def([]),
};

export default defineComponent({
  name: 'adv-playground-page-props-section',
  props: propsSectionProps,
  setup(props) {
    return () => (
      <Section title={props.title} extra={props.extra}>
        <Space.Group direction="vertical">
          {(props.config || []).map((c, index) => (
            <Props key={index + 1} {...c} />
          ))}
        </Space.Group>
      </Section>
    );
  },
});
