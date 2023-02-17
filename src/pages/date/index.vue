<template>
  <view class="container">
    <swiper
      class='swiper-warp'
      :vertical="false"
      :circular="true"
      :autoplay="true"
  >
      <swiper-item v-for="src,idx in imgList">
        <image :src="src" :key="idx"/>
      </swiper-item>
    </swiper>
    <view class="content">
      <view class="hello">{{ hellowMsg }}</view>
    </view>
  </view>
</template>

<script>
import { ref } from 'vue';

export default {
  components: {
  },
  setup(){

    const imgList = ['../../assets/pic/1.jpg']

    const hellowMsg = ref('🏩 下午好呀！我的宝贝~')

    return {
      imgList,
      hellowMsg
    }
  }
}
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  .swiper-warp {
    background-color: white;
    height: 220px;
    margin-bottom: 10px;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    width: 100%;
    padding: 20px;
    height: calc(100% - 210px);
    .hello {
      color: #8D8D8D;
      font-size: 17px;
    }
  }
}
</style>
