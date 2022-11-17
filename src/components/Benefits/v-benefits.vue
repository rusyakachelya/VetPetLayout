<template>
    <div class="v-benefits">
        <div class="container">
            <v-paragraph
                v-for="(benefit, idx) in benefits"
                :key="idx"
                :paragraph="benefit"
            />
            {{benefit}}
        </div>
       
    </div>
</template>

<script>
import VParagraph from '@/components/Paragraph/v-paragraph.vue'

export default {
    name: 'vBenefits',
    components: {
       VParagraph
    },
    props: {
       benefits: {
        type: Array,
        require: true,
       }
    },
    
   
}
</script>

<style>
   
</style>

