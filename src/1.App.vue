<template>
  <h4>{{ a }}</h4>
  <h1>{{ count }}</h1>
  <button @click="increaseCount">增加count</button>
  <button @click="decreaseCount">减少count</button>
  <h2 @click="updateUserAge">{{ name }}&{{ age }}</h2>
  <h3 @click="increaseIndex">{{ index }}</h3>
  <button @click="pushRandomItem">pushRandomItem</button>
  <h4 v-for="item in list" :key="item">{{ item }}</h4>
</template>
<script>
import { ref, reactive, toRef, toRefs } from "vue";
const ref1 = (initValue) => reactive({ value: initValue });
export default {
  setup() {
    // xxx功能
    const count = ref(0);
    const increaseCount = () => count.value++;
    const decreaseCount = () => count.value--;
    // xxx功能
    const user = reactive({ name: "simonhungchun", age: 18 });
    // 对reactive响应式数据直接解构会失去响应式 解决办法借助toRefs
    const { name, age } = toRefs(user);
    // const name = toRef(user, "name");
    // const age = toRef(user, "age");
    const updateUserAge = () => user.age++;
    // reactive用基本数据类型的数据初始化 ❌
    const index = reactive(123);
    const increaseIndex = () => index++;
    // reactive用数组初始化
    const list = reactive([1, 2, 3]);
    console.log(list);
    const pushRandomItem = () => list.push(Math.random());

    return {
      a: 1,
      count,
      increaseCount,
      decreaseCount,
      user,
      name,
      age,
      updateUserAge,
      index,
      increaseIndex,
      list,
      pushRandomItem,
    };
    // const msg = ref("abc");
    // const fn = () => console.log(msg.value);
    // const count = ref(123);
    // onMounted(() => console.log(count.value));
    // return { msg, fn };
  },
};
</script>
