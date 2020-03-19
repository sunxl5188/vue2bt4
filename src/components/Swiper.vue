<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, i) in imgList" :key="i">
        <img :src="item" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'Swiper',
  data () {
    return {
      imgList: [
        '../../static/images/014.jpg',
        '../../static/images/015.jpg',
        '../../static/images/016.jpg'
      ],
      swiperOption: {
        initialSlide: 0,
        // 显示分页
        pagination: {
          el: '.swiper-pagination'
        },
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        speed: 400,
        // 自动轮播
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 开启循环模式
        loop: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {},
  components: {swiper, swiperSlide}
}
</script>

<style scoped lang="less">
.swiper-container{
  max-width:1000px;
  height:240px;

  & .swiper-slide{
    & img{width:100%;height:100%;}
  }
}
</style>
