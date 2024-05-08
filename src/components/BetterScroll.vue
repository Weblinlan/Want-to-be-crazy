<template>
  <div ref="wrapper" :class="[{ flex: option.scrollX }, 'overflow-hidden']">
    <div :class="{ 'flex flex-1': option.scrollX }">
      <slot />
    </div>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";

export default {
  props: {
    dep: {},
    option: {
      type: Object,
      default: () => ({
        scrollY: true,
        click: true,
      }),
    },
  },
  mounted() {
    const bs = BetterScroll(this.$refs.wrapper, this.option);
    // this.$watch的第一个参数
    // 1.可以为data/props的key的字符串
    // 2. 函数返回的该数据引用类型的数据
    this.$watch(
      () => this.dep,
      () => this.$nextTick(() => bs.refresh())
    );
  },
};
</script>
<style></style>
