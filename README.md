// vue3 api模块化 （需要什么功能，就导入什么模块）
// vue2中对vue库是全量引用 不能做到按需引用
// vue3几乎兼容所有的vue2语法 平滑的过渡
// vue3推荐组合式API
// vue3干掉了一些

// Vue中组件的配置项：
// 选项式API（vue3兼容）
// 组合式API(vue3推荐)

1、使用createApp(根组件) 来创建根组件
2、setup = beforeCreate + created
3、setup是vue3 api(和vue2选项配置等价的api)的入口
4、setup函数返回的对象中的属性才能被模板使用
5、使用ref定义响应式数据 ref定义的数据都需要使用.value取值 (使用在模板语法{{}}的数据除外)
6、使用reactive定义响应式数据  不能用于基本数据类型的响应式数据的定义！！！禁止对其解构！（会失去响应式）
7、ref是reactive的语法糖！！(ref就是基于reactive实现的)
```js
const {reactive} from 'vue';
const $ref = (initValue)=>reactive({value:initValue});

```
<!-- ref是基于reactive封装的 -->
8、ref用于任意数据类型 reactive仅用于对象
9、toRef:将reactive定义的响应式数据的某个属性转换为某个ref响应式数据
10、toRefs：批量转换

// vue3:  createApp setup ref reactive toRef toRefs
// vue-router4: createRouter createWebHistory


// Vue中组件的配置项：
// 选项式API（vue3兼容）
// 组合式API(vue3推荐)
import { ref, reactive ,toRef,toRefs} from "vue";
export default {
  setup() {
    // console.log("setup");
    // const msg = ref("abc");
    // const fn = () => console.log(msg.value);
    const count = ref(0);
    // onMounted(() => console.log(count.value));
    const increateCount = () => count.value++;
    const decreaseCount = () => count.value--;

    // 定义一个用户
    const user = reactive({ name: "ttt", age: 23 });
    const updateUserAge = () => user.age++;
    // const name = toRef(user,"name");
    // const age = toRef(user,"age");
    // 对reactive响应式数据直接解构会失去响应式  解决办法借助toRefs
    const {name,age} = toRefs(user);

    // reactive用基本数据类型的数据初始化 X报错
    const index = reactive(123);
    const increateIndex = () => index++;

    // reactive用数组初始化
    const list = reactive([1, 2, 3, 4]);
    const pushRandomItem = () => list.push(5);

    return {
      increateCount,
      decreaseCount,
      count,
      user,
      index,
      increateIndex,
      updateUserAge,
      pushRandomItem,
      list,
      name,
    };
  },
};
