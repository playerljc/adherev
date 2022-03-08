// @ts-ignore
import Space from '@baifendian/adherev-ui-space';
import { defineComponent } from 'vue';
import { array } from 'vue-types';
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
      // @ts-ignore
      <Section title={props.title} extra={props.extra}>
        <Space.Group direction="vertical">
          {(props.config || []).map((c, index) => (
            // @ts-ignore
            <Props key={index + 1} {...c} />
          ))}
        </Space.Group>
      </Section>
    );
  },
});
