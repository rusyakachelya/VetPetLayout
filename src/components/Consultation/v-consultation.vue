<template>
    <div class="v-consultation">
        <div class="container">
            <h4 class="consult-title">Консультація ветеринара в Києві</h4>
            <p class="consult-text">У Vet Pet щодня проводяться повні розгорнуті консультації відносно вихованців з наданням документації власникам в прийомі. Досвідчені ветеринари розповідають заводчикам про:</p>
            <ul class="consult-list">
                <li class="consult-item" 
                v-for="(item, idx) in consultText"
                :key="idx"
                > {{idx+1}}. {{item}}</li>
            </ul>
            <div class="consult-images">
                <img 
                class="consult-img"
                v-for="item in consultImgs" 
                :key="item.id" 
                :src="item.img" 

               >
            </div>
        </div>
    </div>
</template>

<script>
import Consult1 from '@/assets/images/consult-1.png'
import Consult2 from '@/assets/images/consult-2.png'
import Consult3 from '@/assets/images/consult-3.png'

export default {
  components: { },
    name: 'v-consultation',
    props: {
       consultText: {
        type: Array,
        require: true,
       }
    },
    data() {
        return {
            consultImgs: [
                {img: Consult1, id:1},
                {img: Consult2, id:2},
                {img: Consult3, id:3},
                
            ] 
        }
    },
    computed: {
       
    },
    methods: {
    }
}
</script>

<style>
    ul{
        list-style: none;
    }
    .v-consultation{
        margin-top: 100px;
    }
    .consult-title{
        position: relative;
        font-family: 'Jura';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 43px;
        color: #005ECD;
        margin-bottom: 60px;
    }
    /* .consult-title::after{
        content: url('@/assets/images/beforeElem.png');
        position: absolute;
        left: 570px;
        bottom: -50px;
    } */
    .consult-text{
        font-family: 'Jura';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 25px;
        width: 780px;
        margin-bottom: 20px;
    }
    .consult-item{
        font-family: 'Jura';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
    }
    .consult-list{
        margin-bottom: 100px;
    }
    .consult-img{
        width: 310px;
        height: 300px;
    }
    .consult-images{
        display: flex;
        justify-content: space-between;
        padding-bottom: 70px;
    }
</style>