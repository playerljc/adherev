<template>
	<div class="Page">
		<h1>Popup</h1>
		<p>Popup</p>
		<ul>
			<li>- 支持使用 show 方式打开</li>
			<li>- 不与变量进行绑定，开箱即用的功能</li>
		</ul>

		<dl>
			<dt>
				<h2>PopupFactory</h2>
			</dt>
			<dd>
				<h3>PopupFactory.create方法</h3>
				<function-props
								:data="[
            {
              name: 'PopupFactory.create',
              desc: '创建Popup',
              modifier: 'static',
              params: [
                {
                  name: 'config',
                  desc: '配置',
                  type: 'IConfig',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
          ]"
				/>

				<h3>PopupFactory.show方法</h3>
				<function-props
								:data="[
            {
              name: 'PopupFactory.show',
              desc: '打开Popup',
              modifier: 'static',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的popup对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
          ]"
				/>

				<h3>PopupFactory.close方法</h3>
				<function-props
								:data="[
            {
              name: 'PopupFactory.close',
              desc: '关闭一个Popup',
              modifier: 'static',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
          ]"
				/>

				<h3>PopupFactory.closeAll方法</h3>
				<function-props
								:data="[
            {
              name: 'PopupFactory.closeAll',
              desc: '关闭所有的popup',
              modifier: 'static',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
          ]"
				/>

				<h3>PopupFactory.destroy方法</h3>
				<function-props
								:data="[
            {
              name: 'PopupFactory.destroy',
              desc: '销毁Popup',
              modifier: 'static',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
          ]"
				/>
			</dd>
		</dl>

		<dl>
			<dt>
				<h2>Popup</h2>
			</dt>

			<dd>
				<h3>show方法</h3>
				<function-props
								:data="[
            {
              name: 'Popup.show',
              desc: '打开Popup',
              modifier: 'public',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的popup对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
          ]"
				/>

				<h3>close方法</h3>
				<function-props
								:data="[
            {
              name: 'Popup.close',
              desc: '关闭一个Popup',
              modifier: 'public',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
          ]"
				/>

				<h3>closeAll方法</h3>
				<function-props
								:data="[
            {
              name: 'Popup.closeAll',
              desc: '关闭所有的popup',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
          ]"
				/>

				<h3>destroy方法</h3>
				<function-props
								:data="[
            {
              name: 'Popup.destroy',
              desc: '销毁Popup',
              modifier: 'public',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
          ]"
				/>

				<h3>isDestroy方法</h3>
				<function-props
								:data="[
            {
              name: 'Popup.isDestroy方法',
              desc: '是否销毁Popup',
              modifier: 'public',
              params: [],
              returnType: 'boolean',
              returnDesc: '',
            },
          ]"
				/>

				<h3>getId</h3>
				<function-props
								:data="[
            {
              name: 'Popup.isDestroy方法',
              desc: '获取popup的id',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
          ]"
				/>
			</dd>
		</dl>

		<h3>IConfig</h3>
		<props
						:data="[
        {
          params: 'onCreate',
          desc: '挂载的hook',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onBeforeShow',
          desc: '显示之前',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onAfterShow',
          desc: '显示之后',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onBeforeClose',
          desc: '关闭之前',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onAfterClose',
          desc: '关闭之后',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onDestroy',
          desc: '销毁',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'children',
          desc: '显示的内容',
          type: 'React.ReactElement',
          defaultVal: '',
        },
        {
          params: 'zIndex',
          desc: '显示的层级',
          type: 'number',
          defaultVal: '11000',
        },
      ]"
		/>

		<h2>打开</h2>
		<playground-mulit :config="code1">
			<a-button type="primary" @click="onOpen">Open Popup</a-button>
		</playground-mulit>
	</div>
</template>

<script>
  import {Popup} from '@baifendian/adherev';
  import PopupInner from './popup';

  export default {
    computed: {
      code1() {
        return [
          {
            title: 'index.vue',
            lang: 'vue',
            codeText: `
						<template>
							<h2>打开</h2>
							<a-button type="primary" @click="onOpen">Open Popup</a-button>
						</template>
						<script>
							export default {
							  methods: {
							    openPopup() {
										const self = this;

										const popup = Popup.create({
											onCreate: () => {
												console.log('onCreate');
											},
											onBeforeShow: () => {
												console.log('onBeforeShow');
											},
											onAfterShow: () => {
												console.log('onAfterShow');
											},
											onBeforeClose: () => {
												return new Promise((resolve) => {
													resolve();
												});
											},
											onAfterClose: () => {
												Popup.destroy(popup);
											},
											onDestroy: () => {
												console.log('onDestroy');
											},
											children: {
												template: \`<PopupInner ref="ref" @open-popup="onOpenPopup" @close-popup="onClosePopup"/>\`,
												components: {
													PopupInner,
												},
												methods: {
													onOpenPopup() {
														self.openPopup();
													},
													onClosePopup() {
														Popup.close(popup);
													},
												},
											},
											zIndex: 9999,
										});

										popup.show();
									},
									onOpen() {
										this.openPopup();
									},
							  }
							}
						<\/script>
					`,
          },
          {
            title: 'popup.vue',
            lang: 'vue',
            codeText: `
          	<template>
							<div :class="$style.Wrap">
								<div :class="$style.Fixed">
									<a @click="onOpen"> OpenNewPopup </a>
									<div>Popup{id} Title</div>
									<a @click="onClose"> Close </a>
								</div>

								<div :class="$style.Auto">
									<div class="block">
										<p>
											Here comes popup. You can put here anything, even independent view with its own
											navigation. Also not, that by default popup looks a bit different on iPhone/iPod and iPad,
											on iPhone it is fullscreen.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo,
											eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna.
											Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis
											dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim
											quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean
											semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae
											ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.
										</p>
										<p>
											Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut
											lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam.
											Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in
											eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero.
											Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id,
											pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros,
											convallis blandit dui sit amet, gravida adipiscing libero.
										</p>
									</div>
								</div>
							</div>
						</template>
						<script>
						export default {
							methods: {
								onOpen() {
									this.$emit('open-popup');
								},
								onClose() {
									this.$emit('close-popup');
								}
							}
						};
						<\/script>
						<style lang="less" module src="./index.less"/>
					`,
          },
          {
            title: 'index.less',
            lang: 'less',
            codeText: `
          	.Wrap {
							display: flex;
							flex-direction: column;

							> .Fixed {
								display: flex;
								flex-shrink: 0;
								align-items: center;
								justify-content: space-between;
								height: 3rem;
							}

							> .Auto {
								flex-grow: 1;
								box-sizing: border-box;
								min-height: 0;
								padding: 1rem;
								overflow-y: auto;
								font-size: 14px;
								line-height: 21px;
							}
						}
          `,
          },
        ];
      },
    },
    methods: {
      openPopup() {
        const self = this;

        const popup = Popup.create({
          onCreate: () => {
            console.log('onCreate');
          },
          onBeforeShow: () => {
            console.log('onBeforeShow');
          },
          onAfterShow: () => {
            console.log('onAfterShow');
          },
          onBeforeClose: () => {
            return new Promise((resolve) => {
              resolve();
            });
          },
          onAfterClose: () => {
            Popup.destroy(popup);
          },
          onDestroy: () => {
            console.log('onDestroy');
          },
          children: {
            template: `<PopupInner ref="ref" @open-popup="onOpenPopup" @close-popup="onClosePopup"/>`,
            components: {
              PopupInner,
            },
            methods: {
              onOpenPopup() {
                self.openPopup();
              },
              onClosePopup() {
                Popup.close(popup);
              },
            },
          },
          zIndex: 9999,
        });

        popup.show();
      },
      onOpen() {
        this.openPopup();
      },
    },
  };
</script>
