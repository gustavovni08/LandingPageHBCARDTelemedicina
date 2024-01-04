<template>
    <div class="card-container">
        <div class="title-container">
            <p>{{ title }}</p>
        </div>
        <div class="price-container">
            <div class="einstein-price-label"
            v-if="einsteinPrice-price > 0">
                <span class="line"></span>
                <p> R${{ einsteinPrice }}</p>
            </div>

            <div class="price-label">
                <p> <strong>R${{ price }}</strong>/mensal</p>
            </div>
        </div>
        <div class="info-container">
                <div class="info" v-if=" einsteinPrice - price > 0">
                    <div class="span-container">
                        <span class="material-symbols-outlined">
                        savings
                        </span>
                    </div>
                    
                    <div class="p-container">
                        <p>Economize {{ einsteinPrice - price }}R$</p>
                    </div>
                    
                </div>

                <div class="info" v-if=" users > 0 ">
                    <div class="span-container">
                        <span class="material-symbols-outlined">
                        group
                        </span>
                    </div>

                    <div class="p-container">
                        <p> 
                        Sem limite de membros
                        <!-- A partir {{ users }} pessoas -->
                        </p>
                    </div>
                    
                </div>

                
                <div class="info" v-if=" users > 0 ">
                    <div class="span-container">
                        <span class="material-symbols-outlined">
                        attach_money
                        </span>
                    </div>

                    <div class="p-container">
                        <p> 
                        Valor por pessoa
                        <!-- A partir {{ users }} pessoas -->
                        </p>
                    </div>
                    
                </div>
                



        </div>
        <div class="button-container"
        @click="navegar">
            Assine já
        </div>
    </div>
</template>
<script>
export default {
    props:{
        price:Number,
        users:Number,
        title:String,
        einsteinPrice:Number,
    },

    methods:{
        navegar(){
            if (this.title === 'Individual') {
            this.$router.push('/PlanoIndividual');
            } else {
                this.$router.push('/PlanoFamiliar')
            }
        }
    }
}
</script>

<style scoped lang="css">
    .card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #082777;
        border: solid  rgba(0, 0, 0, 0.2) 0.6px;

        height: 535px;
        width: 370px;
        margin: 40px;

        box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);

        border-radius: 12px;
    }

    /* .card-container:hover{
        height: 455px;
        width: 290px;
    } */

    .title-container{
        display: flex;
        align-items: center;
        height: 23%;

    }

    .title-container p {
        font-weight: bold;
        font-size: 26px;
        text-align: center;
        color:#fff;
    }


    .price-container{
        display: flex;
        flex-direction: column;


        height: 20%;
        position: relative;
        top: -40px;
    }

    .einstein-price-label{

        display: inline-block;
        position: relative;
        color:#fff;
        
    }

    .line{
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 50%;
      left: 27px;
      width: 70%;
      height: 0.1px;
      background-color: #FBBB3F; /* Cor da linha */
      transform: translateY(50%);
    }

    .price-label{
        display: flex;
        position: relative;
        top: -10px;
        color:#fff;
    }

    .price-label strong{
        font-size: 30px;
        color:#fff;
    }

    .price-label p{
        font-weight: bold;
    }

    .info-container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 36%;
        width: 73%;

        position: relative;
        top: -20px;

        border-bottom: 1px solid white
    }

    .span-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
    }

    .span-container span{
        text-align: left;
    }

    .info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-left: 10px;
    }

    .p-container{
        display: flex;
        justify-content: stretch;
        align-items: center;
        width: 200px;
    }

    .info p{
    
        text-align: left;
        color: #fff;
    }

    .info p strong{
        color: #fff;
    }

    .info span{
        color:#fff;
    }

    .button-container{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FBBB3F;
        
        font-weight: bold;
        color: #fff;

        width: 170px;
        height: 44px;
        border-radius: 8px;

        cursor: pointer;
        box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
    }

    .button-container:hover{
        background-color:#feca62;
    }

    @media screen and (max-width:800px) {
        .card-container{
            width: auto;
           
        }
    }




</style>