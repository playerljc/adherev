import { Fragment } from 'vue-fragment';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Intl from '@baifendian/adherev-util-intl';

import Collapse from './Collapse';
import { propTypes } from './types';

const selectorPrefix = 'adherev-ui-playground-functionprops';

export const FunctionPropsPropTypes = {
  ...propTypes,
  data: {
    type: Array,
    default: () => [],
  },
};

export default {
  name: 'adv-playground-functionprops',
  props: {
    ...FunctionPropsPropTypes,
  },
  components: {
    Collapse,
  },
  render(h) {
    const { data } = this;

    const props = {};
    for (const p in propTypes) {
      props[p] = this[p];
    }

    return (
      // @ts-ignore
      <Collapse {...{ props }}>
        <div class={selectorPrefix}>
          <table class={`${selectorPrefix}-inner`}>
            {data.map(({ name, desc, modifier, params, returnType, returnDesc }, index) => (
              // @ts-ignore
              <Fragment>
                <tr key={`${index}`} class={`${selectorPrefix}-item`}>
                  <td valign="top" class={`${selectorPrefix}-item-name`}>
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
                        <ConditionalRender conditional={!!params && params.length !== 0}>
                          <ul class={`${selectorPrefix}-level1`}>
                            {params.map((param, index) => (
                              <li key={`${index + 1}`}>
                                <div style={{ marginBottom: 10 }}>
                                  <span class={`${selectorPrefix}-highlight`}>{param.name}</span> -{' '}
                                  {param.desc || '-'}
                                </div>
                                <ul class={`${selectorPrefix}-level2`} style={{ marginBottom: 10 }}>
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
                <ConditionalRender conditional={index !== data.length - 1}>
                  <div class={`${selectorPrefix}-dividing`} />
                </ConditionalRender>
              </Fragment>
            ))}
          </table>
        </div>
      </Collapse>
    );
  },
};
