<template>
   <div class="v-body" :style="{ backgroundImage: `url(${require('@/assets/images/' + bodyItems.img)})` }">
        <div class="container">
            <div class="body__content">
                    <h1 class="body__title">{{bodyItems.title}}</h1>
            </div>
        </div>
           
   </div>
</template>

<script>
    

export default {


    name: 'v-body',
    props: {
        bodyItems: {
            type: Object,
            require: true
        }
    },
    components: {
        
    },
    data() {
        return {
           
        }
    },
    computed: {
        
    },
}
</script>

<style scoped>
    .v-body{
        background-position: center -110px;
        background-repeat: no-repeat; 
        background-size: cover;
        height: 90vh;
        width: 100%;
    }
    .body__title{
    padding-top: 170px;
    font-family: 'Gabriela';
    font-style: normal;
    font-weight: 400;
    font-size: 128px;
    line-height: 125px;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    color: #2573b6;
    width: 400px;
    }
    h1{
        margin: 0;
    }
   
</style>