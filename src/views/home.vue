<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item
        v-for="item in homepageData?.[0]?.extInfo?.banners"
        :key="item.bannerId"
    >
      <van-image width="100vw" height="140px" fit="cover" :src="item.pic" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { ref } from "vue";
import { getHomePageData, getDragonball } from "../service";
export default {
  setup() {
    const homepageData = ref({});
    const homepageDragonball = ref([]);
    (async () => {
      // 如何集中捕获请求错误？
      try {
        homepageData.value = (await getHomePageData()).data.data.blocks;
        homepageDragonball.value = (await getDragonball()).data.data;
      } catch (error) {
        console.log(error);
      }
    })();
    return { homepageData };
  },
};
</script>