<template>
    <div class="v-reviews">
        <div class="container">
            <h3 class="rev-title">Відгуки </h3>
            <div class="review-slider">
                <carousel 
                    class="carousel"
                    :autoplay="true"
                    :perPage="2"
                    :paginationEnabled="true"
                    :navigationEnabled="true"
                    :navigation-next-label="nextLabel"
                    :navigation-prev-label="prevLabel"
                    >
                    <slide
                        v-for="slide in slideInf"
                        :key="slide.id"
                     > 
                         <img 
                            class="carousel-img" 
                            :src="slide.img">
                         <p 
                            class="name">
                            {{slide.name}}
                        </p>
                          <span><img 
                          :src="slide.raiting"
                          ></span>
                    </slide>
                </carousel>
         </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import NextBtn from '@/assets/images/next-btn.png'
import PrevtBtn from '@/assets/images/prev-btn.png'


export default {
   name: 'vReviews',
   components: {
    Carousel,
    Slide,
  },
  props: {
    slideInf: {
        type: Array,
        require: true,
    }
  },
  data () {
    return {
        nextLabel: `<img src='${NextBtn}'/>`,
        prevLabel:  `<img src='${PrevtBtn}'/>`
    }
  },
  
}

</script>

<style scoped>
    .rev-title{
        font-family: 'Jura';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 43px;
        color: #005ECD;
        text-align: center;
        margin-top: 70px;
        margin-bottom: 65px;
    
    }
    .review-slider{
        max-width: 1100px;
        height: 450px;
        margin: 0 auto;
        background: #CDE4FF;
    }
    .carousel-img{
        width: 300px;
        height: 300px;
    }
    .carousel{
        text-align:  center;
        padding-top: 35px;
        display: flex;
    }

    .name{
        margin-top: 20px;
        margin-bottom: 10px;
        font-family: 'Jura';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 43px;
    }
    .VueCarousel-navigation-prev[data-v-453ad8cd] {
        left: -60px;
        transform: translateY(-50%) translateX(-100%);
        font-family: "system";
        background: transparent;
    }
    .VueCarousel-navigation-next[data-v-453ad8cd] {
        right: -60px;
        transform: translateY(-50%) translateX(100%);
        font-family: "system";
    }
</style>