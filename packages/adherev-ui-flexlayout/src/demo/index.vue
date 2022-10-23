<template>
  <div>
<!--    <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
      <adv-flexlayout-fixed>
        <div style="padding: 15px 20px; text-align: center; border-bottom: 1px solid #ccc">Top</div>
      </adv-flexlayout-fixed>

      <adv-flexlayout-auto style="align-items: center; justify-content: center"
        >Center</adv-flexlayout-auto
      >

      <adv-flexlayout-fixed>
        <div style="padding: 15px 20px; text-align: center; border-top: 1px solid #ccc">Bottom</div>
      </adv-flexlayout-fixed>
    </adv-flexlayout>

    <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
      <adv-flexlayout-fixed>
        <div style="padding: 15px 20px; text-align: center; border-bottom: 1px solid #ccc">Top</div>
      </adv-flexlayout-fixed>
      <adv-flexlayout-auto>
        <adv-flexlayout direction="horizontal">
          <adv-flexlayout-fixed
            style="
              align-items: center;
              justify-content: center;
              padding: 0 20px;
              border-right: 1px solid #ccc;
            "
          >
            left
          </adv-flexlayout-fixed>
          <adv-flexlayout-auto style="align-items: center; justify-content: center">
            Center
          </adv-flexlayout-auto>
          <adv-flexlayout-fixed
            style="
              align-items: center;
              justify-content: center;
              padding: 0 20px;
              border-left: 1px solid #ccc;
            "
          >
            Right
          </adv-flexlayout-fixed>
        </adv-flexlayout>
      </adv-flexlayout-auto>
      <adv-flexlayout-fixed>
        <div style="padding: 15px 20px; text-align: center; border-top: 1px solid #ccc">Bottom</div>
      </adv-flexlayout-fixed>
    </adv-flexlayout>

    <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
      <adv-flexlayout-fixed
        style="
          align-items: center;
          justify-content: center;
          padding: 0 15px;
          border-right: 1px solid #ccc;
        "
      >
        Left
      </adv-flexlayout-fixed>
      <adv-flexlayout-auto>
        <adv-flexlayout>
          <adv-flexlayout-fixed
            style="
              align-items: center;
              justify-content: center;
              padding: 15px 0;
              border-bottom: 1px solid #ccc;
            "
          >
            Top
          </adv-flexlayout-fixed>
          <adv-flexlayout-auto style="align-items: center; justify-content: center">
            Center
          </adv-flexlayout-auto>
          <adv-flexlayout-fixed
            style="
              align-items: center;
              justify-content: center;
              padding: 15px 0;
              border-top: 1px solid #ccc;
            "
          >
            Bottom
          </adv-flexlayout-fixed>
        </adv-flexlayout>
      </adv-flexlayout-auto>
      <adv-flexlayout-fixed
        style="
          align-items: center;
          justify-content: center;
          padding: 0 15px;
          border-left: 1px solid #ccc;
        "
        >Right</adv-flexlayout-fixed
      >
    </adv-flexlayout>

    <adv-flexlayout style="height: 500px; border: 1px solid #ccc">
      <adv-flexlayout-fixed>fixed1</adv-flexlayout-fixed>
      <adv-flexlayout-fixed>fixed2</adv-flexlayout-fixed>
      <adv-flexlayout-auto>auto1</adv-flexlayout-auto>
      <adv-flexlayout-fixed>fixed3</adv-flexlayout-fixed>
      <adv-flexlayout-auto>auto2</adv-flexlayout-auto>
      <adv-flexlayout-fixed>fixed4</adv-flexlayout-fixed>
    </adv-flexlayout>

    <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
      <adv-flexlayout-fixed>fixed1</adv-flexlayout-fixed>
      <adv-flexlayout-fixed>fixed2</adv-flexlayout-fixed>
      <adv-flexlayout-auto>auto1</adv-flexlayout-auto>
      <adv-flexlayout-fixed>fixed3</adv-flexlayout-fixed>
      <adv-flexlayout-auto>auto2</adv-flexlayout-auto>
      <adv-flexlayout-fixed>fixed4</adv-flexlayout-fixed>
    </adv-flexlayout>

    <adv-flexlayout style="height: 100px; border: 1px solid #ccc">
      <adv-flexlayout-fixed>Top</adv-flexlayout-fixed>
      <adv-flexlayout-auto :fit="false" :auto-fixed="false" style="overflow-y: auto">
        <p>今天是个好日子</p>
        <p>今天是个好日子</p>
        <p>今天是个好日子</p>
        <p>今天是个好日子</p>
        <p>今天是个好日子</p>
        <p>今天是个好日子</p>
        <p>今天是个好日子</p>
        <p>今天是个好日子</p>
        <p>今天是个好日子</p>
        <p>今天是个好日子</p>
      </adv-flexlayout-auto>
    </adv-flexlayout>

    <adv-flexlayout
      direction="horizontal"
      style="height: 100px; overflow: auto; border: 1px solid #ccc"
    >
      <adv-flexlayout-fixed>Left</adv-flexlayout-fixed>
      <adv-flexlayout-auto :fit="false" :auto-fixed="false">
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
      </adv-flexlayout-auto>
    </adv-flexlayout>-->

    <adv-flexlayout-horizontal
      style="width: 100%; height: 300px; border: 1px solid #ccc"
      leftStyle="border-right: 1px solid #ccc; width: 100px;"
      rightStyle="border-left: 1px solid #ccc; width: 100px;"
    >
      <template v-slot:renderLeft><div>Left</div></template>
      <template v-slot:renderMain><div>Main</div></template>
      <template v-slot:renderRight><div>Right</div></template>
    </adv-flexlayout-horizontal>

    <adv-flexlayout-vertical
      style="width: 100%; height: 300px; border: 1px solid #ccc"
      topStyle="border-bottom: 1px solid #ccc; height: 80px;"
      bottomStyle="border-top: 1px solid #ccc; height: 80px"
    >
      <template v-slot:renderTop><div>Top</div></template>
      <template v-slot:renderMain><div>Main</div></template>
      <template v-slot:renderBottom><div>Bottom</div></template>
    </adv-flexlayout-vertical>

    <adv-flexlayout-horizontal
      style="width: 100%; border: 1px solid #ccc"
      leftStyle="border-right: 1px solid #ccc; width: 100px;"
      rightStyle="border-left: 1px solid #ccc; width: 100px;"
    >
      <template v-slot:renderLeft><div>Left</div></template>
      <template v-slot:renderMain>
        <adv-flexlayout-vertical
          style="width: 100%; height: 300px"
          topStyle="border-bottom: 1px solid #ccc; height: 80px;"
          bottomStyle="border-top: 1px solid #ccc; height: 80px"
        >
          <template v-slot:renderTop><div>Top</div></template>
          <template v-slot:renderMain><div>Main</div></template>
          <template v-slot:renderBottom><div>Bottom</div></template>
        </adv-flexlayout-vertical>
      </template>
      <template v-slot:renderRight><div>Right</div></template>
    </adv-flexlayout-horizontal>

    <adv-flexlayout-toolbar
      :topToolBarSlotNames="['topAdd', 'topRemove', 'topUpdate']"
      :bottomToolBarSlotNames="['bottomAdd', 'bottomRemove', 'bottomUpdate']"
    >
      <template v-slot:topAdd>
        <a-button type="primary" key="add">添加</a-button>
      </template>
      <template v-slot:topRemove>
        <a-button type="primary" key="remove">删除</a-button>
      </template>
      <template v-slot:topUpdate>
        <a-button type="primary" key="update">修改</a-button>
      </template>
      <template v-slot:bottomAdd>
        <a-button type="primary" key="add">添加</a-button>
      </template>
      <template v-slot:bottomRemove>
        <a-button type="primary" key="remove">删除</a-button>
      </template>
      <template v-slot:bottomUpdate>
        <a-button type="primary" key="update">修改</a-button>
      </template>
      Main
    </adv-flexlayout-toolbar>

    <adv-flexlayout-back
      :topToolBarSlotNames="['topAdd', 'topAdd1']"
      :bottomToolBarSlotNames="['bottomAdd', 'bottomUpdate', 'bottomRemove']"
    >
      <template v-slot:backTitle>返回</template>
      <template v-slot:topAdd>
        <a-button type="primary" key="add1">添加1</a-button>
      </template>
      <template v-slot:topAdd1>
        <a-button type="primary" key="add2">添加2</a-button>
      </template>

      <template v-slot:bottomAdd>
        <a-button type="primary" key="add">添加</a-button>
      </template>
      <template v-slot:bottomRemove>
        <a-button type="primary" key="remove">删除</a-button>
      </template>
      <template v-slot:bottomUpdate>
        <a-button type="primary" key="update">修改</a-button>
      </template>
      Main
    </adv-flexlayout-back>

    <div style="height: 500px">
      <adv-flexlayout-scroll :scrollY="true">
        <adv-space-group direction="vertical">
          <FormItemWrap v-for="(item, index) in formItemWrapData" :key="index + 1" />
        </adv-space-group>
      </adv-flexlayout-scroll>
    </div>
  </div>
</template>

<script>
import FormItemWrap from './FormItemWrap';

export default {
  components: {
    FormItemWrap,
  },
  data() {
    return {
      data: Array.from({ length: 30 }),
      formItemWrapData: Array.from({ length: 20 }),
    };
  },
};
</script>
