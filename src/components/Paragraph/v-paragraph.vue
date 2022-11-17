<template>
    <div class="v-paragraph">
        <div class="container">
             <h4 
             class="parag-title"
             :style="{width: getTitleWidth }"
             >
             {{paragraph.title}}</h4>
             <p class="parag-text">{{paragraph.text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-paragraph',
    props: {
        paragraph: {
            type: Object,
            require: true,
        }
    },
    computed: {
       getTitleWidth() {
        return this.paragraph.styles?.width ? `${this.paragraph.styles?.width}px` : 'auto'
       }
    },
}
</script>

<style scoped>
  .parag-title{
    font-family: 'Jura';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 76px;
    color: #005ECD;
   position: relative;
  }
  /* .parag-title::after{
        content: url('@/assets/images/beforeElem.png');
        width: 55px;
        height: 60px;
        position: absolute;
        bottom: 5px;
        left: 240px;
    } */
    .parag-text{
        margin-top: 30px;
        font-family: 'Jura';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 38px;
        color: #000000;
    }
</style>

