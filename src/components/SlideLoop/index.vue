<template>
  <!--banner轮播-->
  <div class="swiper-container" ref="bannerSwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(banner, index) in bannerList"
        :key="banner.id"
      >
        <img :src="banner.imgUrl" />
      </div>
    </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "",

  props:['bannerList'],

  watch: {
    bannerList: {
      immediate: true, //这里加它没什么用，就是为了让和floor的代码一致
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          new Swiper(this.$refs.bannerSwiper, {
            // direction: "vertical", // 垂直切换选项，去掉就代表轮播是水平的

            loop: true, // 循环模式选项   无缝的开关

            // 如果需要分页器      小圆点
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            // scrollbar: {
            //   el: ".swiper-scrollbar",
            // },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
</style>
