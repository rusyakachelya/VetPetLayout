<template>
    <div class="v-gallery-item">
        <img class="item-img" :src=" gallery.img " alt="">
         <p class="item-text">{{gallery.text}}</p>
    </div>
</template>

<script>
export default {
    name: 'vGalleryItem',
    props: {
        gallery: {
            type: Object,
            require: true
        }
    },
    data() {
        return {
            
        }
    },
    computed: {
       
    },
    methods: {
    }
}
</script>

<style>
    .v-gallery-item{
       text-align: center;
    }
    .item-img{
        width: 200px;
        height: 308px;
    }
    .item-text{
        font-family: 'Jura';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 38px;
        color: #000000;
       
    }
</style>

