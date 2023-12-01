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
                    <span class="material-symbols-outlined">
                    savings
                    </span>
                    <p>Economize {{ einsteinPrice - price }}R$</p>
                </div>

                <div class="info" v-if=" users > 0 ">
                    <span class="material-symbols-outlined">
                        group
                    </span>
                    <p> 
                        A partir de {{ users }} pessoas
                    </p>
                </div>
                



        </div>
        <div class="button-container">
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
    }
}
</script>
<style scoped lang="css">
    .card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffff;
        border: solid  rgba(0, 0, 0, 0.2) 0.6px;

        height: 435px;
        width: 270px;
        margin: 40px;

        box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);

        border-radius: 12px;
    }

    .card-container:hover{
        height: 455px;
        width: 290px;
    }

    .title-container{
        display: flex;
        align-items: center;
        height: 23%;

    }

    .title-container p {
        font-weight: bold;
        font-size: 26px;
        text-align: center;
        color:#082777;
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
        
    }

    .line{
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 50%;
      left: 27px;
      width: 70%;
      height: 0.1px;
      background-color: black; /* Cor da linha */
      transform: translateY(50%);
    }

    .price-label{
        display: flex;
        position: relative;
        top: -10px
    }

    .price-label strong{
        font-size: 30px;
        color:#082777;
    }

    .price-label p{
        font-weight: bold;
    }

    .info-container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 36%;

        position: relative;
        top: -20px;
    }

    .info{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        padding-left: 10px;
    }

    .info p{
        max-width: 147.8px;
        text-align: center;
    }

    .info span{
        color:#082777;
    }

    .button-container{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #082777;
        
        font-weight: bold;
        color: #fff;

        width: 170px;
        height: 44px;
        border-radius: 8px;

        cursor: pointer;
        box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
    }

    .button-container:hover{
        background-color:#243d7b;
    }





</style>