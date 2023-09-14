<template>
    <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel) in bannerList" :key="carousel.id">
                <img :src="carousel.imgUrl" />
            </div>
            <!-- <div class="swiper-slide">
                                <img src="./images/banner2.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./images/banner3.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./images/banner4.jpg" />
                            </div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {

}
</script>

<style></style>