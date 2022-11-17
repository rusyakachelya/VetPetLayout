<template>
   <div class="v-header">
    <v-header-bar-vue/>
    <v-body-vue :bodyItems="bodyItems"></v-body-vue>
   </div>
</template>

<script>
import vHeaderBarVue from './v-headerBar.vue'
import vBodyVue from './v-body.vue'


export default {
    name: 'vHeader',
    components: {
        vHeaderBarVue,vBodyVue
    },
    data() {
        return {
          bodyItems: { title: 'Ветеринарна клініка в Києві', img: 'bg-img.png'} ,
         
        }
    }
}
</script>

<style scoped>
   
</style>