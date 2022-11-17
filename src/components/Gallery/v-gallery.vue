<template>
    <div class="v-gallery">
        <div class="container">
            <div class="gallery-content">
                <h3 class="gallery-title">{{galleryTitle}}</h3>
                <div class="gallery-items">
                    <v-gallery-item 
                    v-for="pers in gallery" 
                    :key="pers.id"
                    :gallery='pers'
                    />
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import vGalleryItem from './v-galleryItem.vue'
import Gallery1 from '@/assets/images/gallery-1.png'
import Gallery2 from '@/assets/images/gallery-2.png'
import Gallery3 from '@/assets/images/gallery-3.png'
import Gallery4 from '@/assets/images/gallery-4.png'


export default {

    name: 'vGallery',
    components: {
        vGalleryItem,
    },
    props: {
        
    },
    data() {
        return {
            gallery: [
            {img: Gallery1, text: 'Діагностика',id: 1},
            {img: Gallery2, text: 'Діагностика',id: 2},
            {img: Gallery3, text: 'Діагностика',id: 3},
            {img: Gallery4, text: 'Діагностика',id: 4},
          ],
          galleryTitle: 'Наші послуги'
        }
    },
}
</script>

<style>
    .gallery-items{
      display: flex;
      justify-content: space-around;
       padding-bottom: 100px;
    }
    .gallery-content{
        position: relative;
       
    }
    .gallery-title{
        font-family: 'Jura';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 43px;
        color: #005ECD;
        margin-bottom: 100px;
        
    }
    .gallery-title::after{
        content: url('@/assets/images/beforeElem.png');
        width: 61px;
        height: 53px;
        position: absolute;
        left: 375px;
        top: 30px;
    }
</style>