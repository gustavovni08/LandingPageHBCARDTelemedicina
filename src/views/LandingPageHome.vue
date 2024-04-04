<template>
    <div class="main-container">
        <header class="header" :class="{ 'fixed-header': isFixed }">
            <div class="header-logo-container">
                <img :src="require('@/assets/HbcardTeleMedicina.svg')" alt="">
            </div>
            <div class="header-button-container">
                <div class="button header-button"
                @click="irParaPrecos"
                >
                Assine já
            </div>
            </div>
        </header>


        <section class="home-section">

            <div class="info-container">
                <div class="h1-container">
                    <p class="h1-text">Sua saúde <br>protegida por</p>
                    <h1 class="h1-price">R$ 40,00</h1>
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

        <section class="section-produto">
            <div class="produto-header">
                <div class="produto-title">
                    <p>Cuide da sua saúde em qualquer lugar do mundo</p>
                </div>

                <div class="produto-logo">
                    <img :src="require('@/assets/AlbertEinstein.svg')" alt="AlbertEinstein">
                </div>
            </div>
            <div class="produto-info">
                <div class="produto-itens-container">
                    <div class="list-container">
                       <div class="list-item">
                            <span class="material-symbols-outlined">
                             emergency
                            </span>
                            <p>Atendimento em até 10 minutos</p>
                       </div>
                       <div class="list-item">
                            <span class="material-symbols-outlined">
                             emergency  
                            </span>
                            <p>Parceria Hospital Albert Einstein</p>
                       </div>
                       <div class="list-item">
                            <span class="material-symbols-outlined">
                             emergency
                            </span>
                            <p>Atendimento 24 horas</p>
                       </div>
                       <div class="list-item">
                            <span class="material-symbols-outlined">
                             emergency
                            </span>
                            <p>100% Online</p>
                       </div>

                    </div>
                    <div class="buton-container">
                        <div class="button button-produto"
                        @click="irParaPrecos">
                            ASSINE AGORA
                        </div>
                    </div>
                </div>

                <div class="produto-video-container video">
                    <blockquote 
                    class="tiktok-embed" 
                    cite="https://www.tiktok.com/@hbcard/video/7321827099273219334" 
                    data-video-id="7321827099273219334" 
                    style="max-width: 505px;min-width: 225px;" > 
                    <section> 
                        <a target="_blank" 
                        title="@hbcard" 
                        href="https://www.tiktok.com/@hbcard?refer=embed">
                            @hbcard
                        </a> 
                        
                        <a title="cuidar" 
                        target="_blank" 
                        href="https://www.tiktok.com/tag/cuidar?refer=embed">
                        #cuidar
                        </a> 
                        
                        <a title="saude" 
                        target="_blank" 
                        href="https://www.tiktok.com/tag/saude?refer=embed">
                        #saude
                        </a> 
                        
                        <a title="telemedicina" 
                        target="_blank" 
                        href="https://www.tiktok.com/tag/telemedicina?refer=embed">
                        #telemedicina
                        </a> 
                        <a target="_blank" 
                        title="♬ som original  - HBCARD" 
                        href="https://www.tiktok.com/music/som-original-HBCARD-7321827164377139974?refer=embed">
                        ♬ som original  - HBCARD
                        </a> 
                    </section> 
                    </blockquote>
                </div>
            </div>



        </section>

        <br>

        <section class="section-produto tokio">
            <div class="produto-header">
                <div class="produto-title">
                    <p>Economize com a <br> nossa parceria</p>
                </div>

                <div class="produto-logo">
                    <img :src="require('@/assets/tokio-marine-seguradora.svg')" alt="AlbertEinstein">
                </div>
            </div>
            <div class="produto-info">
                <div class="produto-itens-container">
                    <div class="info-container">
                <div class="h1-container">
                    <p class="h2-text">HBCARD em parceria com a <br>
                        Tokio Marine Seguradora oferece a <br>
                        telemedicina do Einstein com</p>
                    <h1 class="h1-price h1-price-produto">70%OFF</h1>
                </div>

                    </div>
                    <div class="buton-container">
                        <div class="button button-produto"
                        @click="irParaPrecos">
                            ASSINE AGORA
                        </div>
                    </div>
                </div>

                <div class="produto-video-container ">
                    <blockquote class="tiktok-embed" 
                    cite="https://www.tiktok.com/@hbcard/video/7312920835168242950" 
                    data-video-id="7312920835168242950" style="max-width: 505px;min-width: 225px;" > 
                        <section> 
                            <a target="_blank" title="@hbcard" href="https://www.tiktok.com/@hbcard?refer=embed">
                                @hbcard
                            </a> 
                            <a title="telemedicina" target="_blank" href="https://www.tiktok.com/tag/telemedicina?refer=embed">
                                #telemedicina
                            </a> 
                            <a title="segurança" target="_blank" href="https://www.tiktok.com/tag/seguran%C3%A7a?refer=embed">
                                #segurança
                            </a> 
                            <a title="familia" target="_blank" href="https://www.tiktok.com/tag/familia?refer=embed">
                                #familia
                            </a> 
                            <a target="_blank" title="♬ som original  - HBCARD" href="https://www.tiktok.com/music/som-original-HBCARD-7312920893031467782?refer=embed">
                                ♬ som original  - HBCARD</a> 
                            </section> 

                            </blockquote>
                </div>
            </div>



        </section>

        <h1 class="faq-title">Também cuidamos da sua família</h1>


        <section class="section-auxilio">
           
            <div class="auxilio-card">
                <div class="auxilio-card-header">
                    <div class="icon-container">
                        <span class="material-symbols-outlined">
                            skull
                        </span>
                    </div>

                    <div class="auxilio-card-label">
                        Seguro De Vida
                    </div>
                </div>
                    <div class="auxilio-card-text">
                        R$ 10.000,00 em Seguro de Vida por morte acidental
                    </div>
            </div>

            <div class="auxilio-card">
                <div class="auxilio-card-header">
                    <div class="icon-container">
                        <span class="material-symbols-outlined">
                            grade
                        </span>
                    </div>

                    <div class="auxilio-card-label">
                        Sorteio Mensal
                    </div>
                </div>
                    <div class="auxilio-card-text">
                        Titulo de Capitalização no valor de R$ 5.000,00
                    </div>
            </div>

            <div class="auxilio-card">
                <div class="auxilio-card-header">
                    <div class="icon-container">
                        <span class="material-symbols-outlined">
                            add
                        </span>
                    </div>

                    <div class="auxilio-card-label">
                        Auxilio Funeral
                    </div>
                </div>
                    <div class="auxilio-card-text">
                        Auxilio Funeral no valor de  R$ 3.500,00
                    </div>
            </div>
        </section>

        <div class="header-button-container">
                <div class="button header-button"
                @click="irParaPrecos"
                >
                Assine já
            </div>
        </div>

        <section class="faq-section">

            <div class="faq-header">
                <h1 class="faq-title"> Dúvidas Frequentes</h1>
            </div>
            <div class="faq-container"
            v-for="(item, index) in faq" :key="index">
                <LandingPageFaq
                :label="item.label"
                :text="item.text"
                />
            </div>
        </section>

        <section class="section-depoimentos">
            <h1 class="faq-title"> Reviews dos clientes</h1>

            <div class="depoimento-container"
            v-for="(depoimento, index) in depoimentos" :key="index">
                <LandingPageDepoimentoCard
                :img="depoimento.img"
                :nome="depoimento.nome"
                :text="depoimento.text"
                />
            </div>
        </section>

        <section class="video-einstein">
            <div class="video-einstein-title-container">
                <h1 class="faq-title"> Qualidade Albert Einstein</h1>
            </div>
            <div class="video-einstein-container">
                <iframe 
                :width="iframe.width" 
                :height="iframe.heigth" 
                src="https://www.youtube.com/embed/gIf5cdwdgz0?si=w5hyJhMjdCvsf8mB" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            </div>
        </section>

        <div class="here"></div>
        
        <section class="preços">
            <div class="card-container"
            v-for="(plano, index) in planos" :key="index"
            >
                <LandingPageCardPrecos
                :title="plano.title"
                :users="plano.users"
                :einsteinPrice="plano.einsteinPrice"
                :price="plano.price"
                :push="plano.push"
                />
            </div>
        </section>
    </div>
</template>

<script>

import LandingPageFaq from '@/components/LandingPageFaq.vue';
import LandingPageCardPrecos from '@/components/LandingPageCardPrecos.vue';
import LandingPageDepoimentoCard from '@/components/LandingPageDepoimentoCard.vue';

export default {
    data(){
        return{
            planos:[
                {
                    einsteinPrice: 100,
                    title: 'Familiar',
                    price: 40.0,
                    users: 2,
                    push:'Familiar'
                },
                {
                    einsteinPrice: 130,
                    title: 'Individual',
                    price: 50.0,
                    users: 0,
                    push:'Individual'
                },
                // {
                //     einsteinPrice: 0,
                //     title: 'Empresarial',
                //     price: 19.90,
                //     users: 10,
                // },
            ],

            isFixed: false,

            faq:[
                {
                    label:'O que é Telemedicina HBCARD?',
                    text:'Telemedicina hbcard é o seu pronto atendimento virtual, disponibilizando consultas com médicos do hospital israelita Albert Einstein pelo seu computador ou celular de qualquer lugar.'
                },
                {
                    label:'Quem pode usar?',
                    text:'Qualquer pessoa acima de 14 até 70 anos.'
                },
                {
                    label:'Como assinar?',
                    text:'Acesse o site hbcard.com.br e assine 100% online'
                },
                {
                    label:'Tem taxa de adesão?',
                    text:'Sim, no primeiro pagamento é somado a taxa de adesão de valor igual a mensalidade.'
                },
                {
                    label:'Quando começar a usar?',
                    text:'Adesões realizadas entre dia 1 e dia 25 de cada mês, a vigência inicia apartir do dia 10 do mês subsequente.'
                },
            ],

            depoimentos:[
                {
                    img:'yuki.png',
                    nome:'Yuki Toma Giraud, Buenos Aires',
                    text:'Meu nome é Yuki Toma Giraud, tive uma experiência muito positiva com o HBCARD, usando a Telemedicina. Após peregrinar por algumas consultas presenciais que não surgiu nenhum efeito, usei à telemedicina pois estava em Buenos Aires e, o médico solicitou um exame basico(fezes), fiz, mandei p ele no mesmo e-mail e, ele me receitou um remédio, resolvendo um problema que já vinha há mais de 3 meses, onde todos os outros médicos diziam que era virose.',
                },
                {
                    img:'zenilson.png',
                    nome:'Zenilson Oliveira de Lima, Maceió',
                    text:'Sou vendedor e utilizo muito a minha voz, um certo dia minha garganta estava bastante inflamada, e em cinco minutos de atendimento na TELEMEDICINA a médica me examinou, enviou por email o atestado, a receita e ainda mais o resumo da minha consulta. Tudo isso no conforto do meu lar com um atendimento rápido, eficaz e com meu problema solucionado!',
                },
            ],

            iframe:{
                width:854,
                heigth:480,
            },

        }
    },

    methods:{
        irParaPrecos(){
            const precos = document.querySelector('.here')
            precos.scrollIntoView({behavior:'smooth'})
        },

        handleScroll() {
      // Verifica se a posição de rolagem é maior que a posição do cabeçalho
        this.isFixed = window.scrollY > this.$el.querySelector("header").offsetTop;
        },

        updateDimensions(){
            const screenWidth = window.innerWidth

            if (screenWidth < 800){
                this.iframe.width = 240
                this.iframe.heigth = 360
            } else {
                this.iframe.width = 854
                this.iframe.heigth = 480
            }
        },

        verificarCodigoVendedor(){
            if(this.$route.params.vendor_code){
                const vendor_code = this.$route.params.vendor_code
                localStorage.setItem('vendor_code', vendor_code)
            }else{
                console.log('não há codigo de vendedor')
            }
        }
    },

    mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.updateDimensions)

    this.updateDimensions()
    this.verificarCodigoVendedor()
    },


    components:{LandingPageCardPrecos, LandingPageDepoimentoCard, LandingPageFaq}
}
</script>


<style scoped lang="css">

    .main-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .header{
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        width: 104%;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

    }

    .fixed-header {
     position: fixed;
     top: 0;
     width: 100%;
     background-color: white;
     z-index: 1000;
  /* Adicione outros estilos conforme necessário */
    }

    .header-logo-container{
        display: flex;
        align-items: center;
        margin-left: 7%;
        padding: 14px;
        padding-top: 21px;
    }

    .header-logo-container img{
        width: 170px;
    }

    .header-button-container{
        display: flex;
        align-items: center;
        margin-right: 7%;
    }

    .header-button{
        height: 55px;
        width: 200px;
    }

    .home-section{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 80vh;
        width: 100%;
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

        /* animation: fadeInRight 1s ease-out forwards; */
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
        /* animation: fadeInRight 1s ease-out forwards; */
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
        /* animation: fadeIn 1.6s ease-out forwards; */

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

        /* animation: fadeIn 1.8s ease-out forwards; */
       
    }
    .img-container img{
        position: relative;
        top: 47px;
/* 
        /* max-width: 50vw; */
        max-height: 80vh;
    }

    .section-produto{
        display: flex;
        flex-direction: column;
        height: 80vh;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 200px;
        margin-bottom: 200px;

    
    }

    .produto-header{
        display: flex;
        width: 73%;
        justify-content: space-between;
    }
    .produto-title p{
        font-weight: bold;
        font-size: 52px;
        color: #082777;
        text-align: left;
    }
    .produto-logo{
        display: flex;
        width: 30%;
    }


    .produto-title{
        width: 70%;
    }

    .list-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
        font-size: 22px;
        color: #082777;
    }

    .list-item p{
        text-align: left;
        width: 100%;
        margin-left: 20px;
    
    }

    .produto-info{
        display: flex;
        width: 73%;
        justify-content:space-between;
    
    }

    .button-produto{
        width: 350px;
        height: 63px;
    }

    .h2-text{
        color:#082777;
        font-size: 25px;
        text-align: left;
        font-weight: bold;

        /* animation: fadeInRight 1s ease-out forwards; */

        position: relative;
        top: -40px;
    }

    .section-auxilio{
        display: flex;
        margin: 60px;
        background-color: #082777;
        box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        
    }

    .auxilio-card{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        color: #fff;
        height: 250px;
        width: 300px;
        margin: 30px;
    }

    .auxilio-card span{
        font-size: 64px;
    }

    .auxilio-card-label{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

    .auxilio-card-text{
        width: 250px;
    }

    .faq-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 60px;
    }

    .faq-header{
        display: flex;
        justify-content: center;
    }
    .faq-title {
        display: flex;
        justify-content: center;
        font-weight: bold;
        font-size: 52px;
        color: #082777;
        text-align: left;
    }

    .section-depoimentos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
    }

    .here{
        height: 10vh;
        margin: 40px;
        background-color: pink;
    }

    .preços{
        
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        height: 80vh;
        margin-top: 60px;
    }




    @media  screen and (max-width: 800px) {

        .header{
            width: 180%;
            flex-direction: column;
            align-items: center;
        }

        .header-logo-container{
            margin: 0;
            padding: 0;
            margin-top: 40px;
        }

        .header-button-container{
            margin-left: 40px;
            margin-bottom: 30px;
        }
        .main-container{
            width: 100%;

        }
         .home-section{
            flex-direction: column;
            margin-top: 200px;
            margin-bottom: 400px;
        }

        .home-button{
            width: 73%;
            margin-left: 2%;
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

         max-width: 50vw; 
         max-width: 80%; 
         margin-bottom: 60px;
         }
         

        .section-produto{
            margin-top: 800px;
            align-items: center;
            margin-bottom: 400px;
        }
        .produto-header{
            flex-direction: column;
            text-align: left;

            
        }

        .produto-header p{
            text-align: center;
            /* margin-left: 20%; */
            font-size: 50px;
        } 

        .produto-logo{
            width: 80%;
            align-items: center;
            justify-content: center;
        }

        .produto-logo{
            width: 100%;
            margin: 10px;
            margin-left: 0px;

        }

        .produto-info{
            justify-content: center;
            flex-direction: column;
            margin-bottom: 140px;
        }

        .produto-video-container{
            margin-top: 30px;
            margin-bottom: 300px;
        }

        .produto-title{
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .h2-text{
            top: 0px;
            text-align: center;
            width: 100%;
        }

        .h1-price-produto{
            margin-top: 50px;
            top:-20px;
            margin-left: 2%;
            
        }

        .button-produto{
            margin-top: 20px;
        }

        .buton-container{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            
        }

        .section-auxilio{
            flex-direction: column;
            width: 80%;
            
        }

        .auxilio-card{
            width: auto;
            height: auto;
        }

        .auxilio-card-text{
        width: 200px;
    }
        .faq-section{
            margin-top: 200px;
            margin-bottom: 0px;
            justify-content: center;
        }

        .faq-title{
            text-align: center;
        }
        .here{
            height: 10vh;
        }

        .preços{
            flex-direction: column;
            margin-top: 400px;
        }


    } 


</style>