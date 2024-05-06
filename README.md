// vue3 api 模块化
// vue2 中对 vue 库是全量引用 不能做到按需引用
// vue3 几乎兼容所有的 vue2 语法 平滑的过渡
// vue3 推荐组合式 API
// vue3 干掉了
// vue2 中组件的配置项：
// 选项式 API（vue3 兼容）
// 组合式 API（vue3 推荐）
/\*\*

- name
- data
- methods
- computed
- watch
- components
- mixins
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destoryed
- ...
  \*/

1. 使用 createApp(根组件) 创建根组件
2. setup === beforeCreaete + created
3. setup 是 vue3 API（和 vue2 选项配置等价的 api） 的入口
4. setup 函数返回的对象中的属性才能被模板使用！！！
5. 使用 ref 定义响应式数据 ref 定义的数据都需要使用.value 取值（模板语法的{{}}除外）
6. 使用 reactive 定义响应式数据 ！！！不能用于基本数据类型的响应式数据的定义！！！禁止对其解构！！！
7. ref 是 reactive 的语法糖！！！（ref 就是基于 reactive 实现的）

```js
import { reactive } from "vue";
const $ref = (initValue) => reactive({ value: initValue });

const count = $ref(1);
console.log(count.value);
```

8. ref 用于任意数据类型 reactive 仅用于对象
9. toRef: 将 reactive 定义的响应式数据的某个属性转换为某个 ref 响应式数据
10. toRefs：批量转换 解构保持响应式
