import { VNode, defineComponent } from 'vue';
import { array } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Intl from '@baifendian/adherev-util-intl';

import Collapse, { collapseProps } from './Collapse';

const selectorPrefix = 'adherev-ui-playground-functionprops';

export interface IDataItemType {
  // 函数名称
  name: string | VNode;
  // 函数描述
  desc: string | VNode;
  // 函数修饰符
  modifier: 'static' | 'public' | 'private' | 'protected';
  // 函数参数
  params: Array<{
    // 参数名称
    name: string | VNode;
    // 参数说明
    desc: string | VNode;
    // 参数类型
    type: string | VNode;
    // 默认值
    defaultVal: string | VNode;
    // 是否必填
    required: string | boolean;
  }>;
  // 函数返回值类型
  returnType: string | VNode;
  // 函数返回值说明
  returnDesc: string | VNode;
}

export const functionPropsProps = {
  ...collapseProps,
  data: array<IDataItemType>().def([]),
};

export default defineComponent({
  name: 'adv-playground-functionprops',
  props: functionPropsProps,
  setup(props, {}) {
    return () => {
      const _collapseProps = {};

      for (const p in collapseProps) {
        _collapseProps[p] = props[p];
      }

      return (
        <Collapse {..._collapseProps}>
          <div class={selectorPrefix}>
            <table class={`${selectorPrefix}-inner`}>
              {props.data.map(({ name, desc, modifier, params, returnType, returnDesc }, index) => (
                <>
                  <tr key={`${index}`} class={`${selectorPrefix}-item`}>
                    <td valign="top" class={`${selectorPrefix}-item-name`}>
                      {/*@ts-ignore*/}
                      <ConditionalRender conditional={!!modifier}>
                        <span class={`${selectorPrefix}-modifier`}>{modifier || 'public'} - </span>
                      </ConditionalRender>
                      <span class={`${selectorPrefix}-functionName`}>
                        {name}(
                        <span class={`${selectorPrefix}-highlight`}>
                          {(params || []).map((t) => t.name).join(' , ')}
                        </span>
                        )
                      </span>
                    </td>
                    <td valign="top" class={`${selectorPrefix}-item-info`}>
                      <div class={`${selectorPrefix}-item-desc`}>{desc}</div>
                      <dl>
                        <dt class={`${selectorPrefix}-`}>{Intl.tv('参数说明')}：</dt>
                        <dd>
                          {/*@ts-ignore*/}
                          <ConditionalRender conditional={!!params && params.length !== 0}>
                            <ul class={`${selectorPrefix}-level1`}>
                              {params.map((param, index) => (
                                <li key={`${index + 1}`}>
                                  <div style={{ marginBottom: 10 }}>
                                    <span class={`${selectorPrefix}-highlight`}>{param.name}</span>{' '}
                                    - {param.desc || '-'}
                                  </div>
                                  <ul
                                    class={`${selectorPrefix}-level2`}
                                    style={{ marginBottom: 10 }}
                                  >
                                    <li>
                                      {Intl.tv('类型')}
                                      <span class={`${selectorPrefix}-split`}>-</span>
                                      <span class={`${selectorPrefix}-highlight`}>
                                        {param.type || '-'}
                                      </span>
                                    </li>
                                    <li>
                                      {Intl.tv('默认值')}
                                      <span class={`${selectorPrefix}-split`}>-</span>
                                      <span class={`${selectorPrefix}-highlight`}>
                                        {param.defaultVal || '-'}
                                      </span>
                                    </li>
                                    <li>
                                      {Intl.tv('是否必填')}
                                      <span class={`${selectorPrefix}-split`}>-</span>
                                      <span class={`${selectorPrefix}-highlight`}>
                                        {param.required || false ? Intl.tv('是') : Intl.tv('否')}
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              ))}
                            </ul>
                          </ConditionalRender>
                        </dd>
                      </dl>
                      <dl>
                        <dt>{Intl.tv('返回值')}：</dt>
                        <dd>
                          <ul class={`${selectorPrefix}-level1`}>
                            <li>
                              {Intl.tv('类型')}
                              <span class={`${selectorPrefix}-split`}>-</span>
                              <span class={`${selectorPrefix}-highlight`}>{returnType || '-'}</span>
                            </li>
                            <li>
                              {Intl.tv('说明')}
                              <span class={`${selectorPrefix}-split`}>-</span>
                              <span class={`${selectorPrefix}-highlight`}>{returnDesc || '-'}</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </td>
                  </tr>
                  {/*@ts-ignore*/}
                  <ConditionalRender conditional={index !== props.data.length - 1}>
                    <div class={`${selectorPrefix}-dividing`} />
                  </ConditionalRender>
                </>
              ))}
            </table>
          </div>
        </Collapse>
      );
    };
  },
});
