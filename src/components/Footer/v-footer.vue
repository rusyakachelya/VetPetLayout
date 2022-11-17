<template>
    <div class="v-footer">
        <div class="container">
            <div class="footer-items">
                <div class="footer-links">
                    <a href=""><img class="footer-logo" src="@/assets/images/footer-logo.png" alt=""></a>
                    <ul class="footer-social">
                        <li class="social-links"><a href=""><img src="@/assets/images/telegramm.svg" alt=""></a></li>
                        <li class="social-links"><a href=""><img src="@/assets/images/viber.svg" alt=""></a></li>
                        <li class="social-links"><a href=""><img src="@/assets/images/facebook.svg" alt=""></a></li>
                    </ul>
                </div>
                <div class="footer-adress">
                    <div class="adress">
                        <p>Адреса</p>
                        <p>м. Київ, Дніпровська набережна 25Б</p>
                    </div>
                    <div class="email"> 
                        <p>Пошта</p>
                        <p>пошта@gmail.com</p>
                    </div>
                </div>
                <img class="footer-map" src="@/assets/images/footer-map.png" alt="">
                <div class="footer-another">
                    <li><a href="">Про нас</a></li>
                    <li><a href="">Послуги</a></li>
                    <li><a href="">Спеціалісти</a></li>
                    <li><a href="">Відгуки</a></li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'vFooter',
    data() {
        return {

        }
    },
}
</script>

<style scoped> 
    .v-footer{
        margin-top: 165px;
        background: #34373E;
        width: 100%;
        color: white;
    }
    .footer-items{
        display: flex;
        justify-content: space-between;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .footer-map{
        width: 300px;
        height: 250px;
    }
    .footer-social{
        display: flex;
        justify-content: space-around;
        margin-top: 35px;
    }
    .footer-links{
        margin-top: 60px;
    }
   .footer-adress{
    margin-top: 50px;
   }
   .adress p {
    margin-bottom: 15px;
   }
   .email p {
    margin-bottom: 15px;
   }
   .footer-another{
    margin-top: 50px;
   }
   .footer-another li{
    margin-bottom: 23px;
   }
   .footer-another li>a{
    color: white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
   }
   
</style>