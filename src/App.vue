<template>
  <div id="app">
    <v-header/>
    <v-gallery/>
    <v-paragraph 
      :paragraph="paragraphAbout"
      />
    <v-consultation 
      :consultText="consultText"
      />
    <v-benefits
      :benefits="benefits"
    />
    <v-reviews
      :slideInf='carousel'
    />
    <v-footer/>
  </div>
</template>


<script>
import vHeader from './components/Header/v-header.vue'
import VGallery from './components/Gallery/v-gallery.vue'
import VParagraph from './components/Paragraph/v-paragraph.vue'
import VConsultation from './components/Consultation/v-consultation.vue'
import vBenefits from '@/components/Benefits/v-benefits.vue'
import VFooter from '@/components/Footer/v-footer.vue'
import VReviews from '@/components/Reviews/v-reviews.vue'

import slide1 from '@/assets/images/slide1.png'
import slide2 from '@/assets/images/slide2.png'
import slide3 from '@/assets/images/slide3.png'

import raiting from '@/assets/images/raiting.png'

  

   
   
  export default {
    name: 'App',
    components: {
      vHeader,
        VGallery,
        VParagraph,
        VConsultation,
        vBenefits,
        VFooter,
        VReviews
    },
    data() {
      return {
        paragraphAbout: {
          title: 'Про нас',
          text: 'Vet Pet – сучасна ветеринарна клініка, лікувально-діагностична база якої вважається однією з найкращих в Україні. У розпорядженні лікарів доступні найсучасніші діагностичні інструменти: компютерна томографія, високоякісний рентген, експертне УЗД, ЕКГ, лабораторні дослідження, в клініці постійно та успішно проводяться ендоскопічні операції, цілодобово працює відділення реанімації та інтенсивної терапії, а також загальної терапії.Наші фахівці відвідують міжнародні конференції та семінари, та регулярно підвищуючи свій рівень, зосереджуючись на вивченні певної галузі ветеринарної науки, отримують вузьку спеціалізацію.'
        },
        consultText: [
        'Годування',
        'Догляд та необхідних для нього гіпоалергенних засобах',
        'Профілактика захворювань',
        'Надання першої допомоги',
        'Грамотне лікуванні вихованців',
        'Розведення тварин',
        'Проведення кастрації і стерилізації',
        'Хірургічне лікування',
        'Післяопераційний період',
        'Реабілітацію',
        'Вакцинацію',
        'Чіпування',
        'Перетримку вихованця',
        'Дерматологічні лікування',
        'Підготовку документів для виїзду за кордон і т. ін.'
        ],
        benefits: [
          {title: 'Всі обстеження і фахівці в одному місці', text: 'У нас Представлені такі напрямки ветеринарної медицини: терапія, хірургія, стоматологія, акушерство і гінекологія, неврологія, ортопедія і ін. Також ведеться прийом вузькопрофільного напрямку по гризунам і птахам.',styles: {width: 882, bottom: 80, right: 50 }},
          {title: '100% точність лабораторних досліджень', text: 'У ВЦ "Animal Clinic" надається повний комплекс лабораторної діагностики, що дає можливість більш точно поставити і підтвердити діагноз, а в подальшому контролювати процес лікування і вносить корекцію в призначення.',styles: {width: 968, bottom: 60, right: 100 }},
          {title: 'Високоекспертне обладнання', text: 'У розпорядженні центру є портативний мобільний апарат УЗД, що дозволяє в найкоротші терміни провести дослідження не тільки в умовах стаціонару, а й на виїзді. Також за допомогою портативної рентген-системи, ми можемо провести розгорнуту діагностику з проблем, повязаних з ортопедією, травматологією, виявити асцитні явища в черевній і грудній порожнинах.', styles: {width: 610, bottom: 80, right: 65}},
          {title: 'Комфортні умови', text: 'Адміністративний персонал погоджує зручний для Вас дату та час відвідування нашого центру, що зводить до мінімуму контакт Вашої тварини з іншими під час візиту. У зоні очікування Ви можете випити чашечку запашної кави, а також почастувати свого вихованця улюбленими ласощами, щоб візит в клініку асоціювався у нього з приємними емоціями.', styles: {width: 606, bottom: -15, right: 30}},
        ],
        carousel: [
          {img: slide1, name: 'Катерина', raiting, id:1},
          {img: slide2, name: 'Олександр', raiting, id:2},
          {img: slide3, name: 'Оксана', raiting, id:3},
        ]
      }
    }
  }



</script>

<style> 
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      
    }
    a{
      text-decoration: none;
    }
    ul{
      padding: 0;
    }
    .container {
      max-width: 1170px;
      padding: 0 15px;
      margin: 0 auto;
    }
   li{
   list-style: none;
   }
</style>
