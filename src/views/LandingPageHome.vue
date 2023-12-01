<template>
    <div class="main-container">
        <section class="home-section">

            <div class="info-container">
                <div class="h1-container">
                    <p class="h1-text">Sua saúde <br>protegida por</p>
                    <h1 class="h1-price">R$ 29,90</h1>
                </div>
               
                <div class="button home-button"
                @click="irParaPrecos">
                    Assine já
                </div>
            </div>

            <div class="img-container">
                <img :src="require('@/assets/homeImg.png')" alt="homeImg">
            </div>
        </section>

        <br>
        
        <section class="preços">
            <div class="card-container"
            v-for="(plano, index) in planos" :key="index"
            >
                <LandingPageCardPrecos
                :title="plano.title"
                :users="plano.users"
                :einsteinPrice="plano.einsteinPrice"
                :price="plano.price"
                />
            </div>
        </section>
    </div>
</template>

<script>

import LandingPageCardPrecos from '@/components/LandingPageCardPrecos.vue';

export default {
    data(){
        return{
            planos:[
                {
                    einsteinPrice: 129.90,
                    title: 'Individual',
                    price: 39.90,
                    users: 0,
                },
                {
                    einsteinPrice: 99.90,
                    title: 'Familiar',
                    price: 29.90,
                    users: 2,
                },
                // {
                //     einsteinPrice: 0,
                //     title: 'Empresarial',
                //     price: 19.90,
                //     users: 10,
                // },
            ]
        }
    },

    methods:{
        irParaPrecos(){
            const precos = document.querySelector('.preços')
            precos.scrollIntoView({behavior:'smooth'})
        }
    },


    components:{LandingPageCardPrecos}
}
</script>


<style scoped lang="css">

    .main-container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .home-section{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 80vh;
        margin-top: 60px;
    }
    .info-container{
        display: flex;
        flex-direction: column;
    }
    .h1-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

    }
    .h1-text{
        color:#082777;
        font-size: 50px;
        text-align: left;
        font-weight: bold;

        animation: fadeInRight 1s ease-out forwards;
    }
    .h1-price{
        position: relative;
        top: -60px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48px;
        padding: 21px;
        padding-bottom: 10px;
        padding-top: 10px;
        padding-right: 35px;
        background-color: #082777;
        color: #ffff;
        border-radius: 12px;
        animation: fadeInRight 1s ease-out forwards;
        box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.1);
    }
    @keyframes fadeInRight {
    /* No início da animação (0%), a opacidade é 0 e a posição X é 100% */
    0% {
        opacity: 0;
        transform: translateX(100%);
    }

    /* No final da animação (100%), a opacidade é 1 e a posição X é 0 */
    100% {
        opacity: 1;
        transform: translateX(0);
    }
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #FBBB3F;
        border-radius: 12px;
        font-weight: bold;
        color: #ffff;

        box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;


    }
    .home-button{
        animation: fadeIn 1.6s ease-out forwards;

        width: 80%;
        padding-left: 35px;
        padding-right: 35px;
        padding-top: 20px;
        padding-bottom: 20px;

        font-size: 50px;
        position: relative;
        top: -30px;
    }
    @keyframes fadeIn {
    /* No início da animação (0%), a opacidade é 0 */
    0% {
        opacity: 0;
    }

    /* No final da animação (100%), a opacidade é 1 */
    100% {
        opacity: 1;
    }
    }
    .button:hover{
        background-color: #feca62;
    }
    .img-container{
        display: flex;
        align-items: center;
        justify-content: center;

        animation: fadeIn 1.8s ease-out forwards;
       
    }
    .img-container img{
        position: relative;
        top: 47px;
/* 
        /* max-width: 50vw; */
        max-height: 80vh;
    }


    @media  screen and (max-width: 800px) {
        .home-section{
            flex-direction: column;
            margin-top: 200px;
        }

        .h1-container{
            align-items: center;
        }

        .h1-text{
            text-align: center;
        }

        .img-container img{
        position: inline;
        top: 47px;
/* 
        /* max-width: 50vw; */
        max-width: 80%;
        }

        .preços{
            flex-direction: column;
            margin-top: 680px;
        }
    }

    .preços{
        
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
    }


</style>