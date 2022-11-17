<template>
   <div class="bar">
    <div class="container">
        <div class="menu">
            <a class="logo__link" href="">
                <img class="menu__logo" src="@/assets/images/logo.svg" alt="">
            </a>
             <ul class="menu__list">
                <li class="menu__item"><a class="menu__link" href="">Про нас</a></li>
                <li class="menu__item"><a class="menu__link" href="">Послуги</a></li>
                <li class="menu__item"><a class="menu__link" href="">Спеціалісти</a></li>
                <li class="menu__item"><a class="menu__link" href="">Відгуки</a></li>
             </ul>
            <a class="menu__btn" href="">Записатись на прийом</a>
        </div>
    </div>
   </div>
</template>

<script>


export default {
    name: 'v-headerBar',
    props: {

    },
    data() {
        return {
           
        }
    },
}
</script>

<style scoped>
    .bar{
        background: rgba(102, 145, 196, 0.59);
    }
    .menu{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .menu__list{
        display: flex;
        justify-content: space-around;
        margin-left: 30px;
    }
    .menu__item{
        list-style: none;
        margin-right: 30px;
    }
    .menu__item:last-child{
        margin-right: 0;
    }
    .menu__link{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 29px;
        color: #000000;
    }
    .menu__btn{
        background: #F40000;
        border-radius: 15px;
        width: 400px;
        text-align: center;
        color: white;
        height: 25px;
        font-size: 20px;
    }
    
</style>