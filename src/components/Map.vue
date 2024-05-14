<template>
	<!-- v-model的改动 v-model需要传递双向绑定的属性参数 -->
	<Comp v-model:key="value" />
	<Comp :key="value" @update:key="(e) => (value = e)" />
	<!-- v-bind:属性.sync 的兼容  .sync修饰符 已经被vue3弃用 因为v-model完全满足改需求 -->

	<!--改动的内置组件-->
	<transition name="a">
		<div>vue2</div>
	</transition>
	<transition name="b">
		<div>vue3</div>
	</transition>
	<!-- 新增组件 -->
	<Suspense>
		<template #default>
			<!-- 渲染主体（组件） 提供异步依赖（async setup） -->
		</template>
		<template #fallback>
			<!-- 在渲染主体没有完成异步依赖的resolve的时候 渲染的元素 -->
		</template>
	</Suspense>
	<Teleport></Teleport>
</template>
<script>
// vue2语法  VS vue3的<script setup>语法
export default {
	// 定义组件名称
	name: "", // defineOptions({name: ''}) 不用主动导入 可以直接使用
	// 定义组件的响应式数据
	data() {}, // ref、reactive API 在setup中
	methods: {}, // 普通函数 在setup中
	computed: {}, // computed API 在setup中
	watch: {}, // watch API 在setup中
	components: {}, // 导入直接使用 无需任何配置
	props: {}, // defineProps 在setup中 不用主动导入 可以直接使用
	model: {}, // defineModel 在setup中 不用主动导入 可以直接使用
	beforeCreate() {}, // 在setup中
	created() {}, // 在setup中
	beforeMount() {}, // onBeforeMount API 在setup中
	mounted() {}, // onMounted API 在setup中
	beforeUpdate() {}, // onBeforeUpdate API 在setup中
	updated() {}, // onUpdated API 在setup中
	beforeDestroy() {}, // onBeforeUnmount API 在setup中
	destroyed() {}, // onunMounted API 在setup中
	/* vue2 不再选项配置中的API */
	// this.$attrs  // cosnt attrs = useAttrs()
	// this.$slots  // const slots = useSlots()
	/* vue3 新增的API */
	emits: [], // defineEmits 在setup中 不用主动导入 可以直接使用
};
</script>

