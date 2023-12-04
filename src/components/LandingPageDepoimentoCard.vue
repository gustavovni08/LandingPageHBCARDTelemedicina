<template>
    <div class="card-container">
            <div class="img-container">
                <img :src="require(`@/assets/${img}`)" alt="depoimento imagem">
            </div>

        <div class="info-container">

            <div class="text-container">
                <p>
                    {{text}}
                </p>
            </div>

            <div class="nome-container">
                <p>
                    {{ nome }}
                </p>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    props:{
        img: String,
        nome: String,
        text: String,
    },


}
</script>
<style scoped>
    .card-container{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 50px;
        z-index: 2;

    }


    .img-container{
        display: flex;
    }

    .img-container img{
        width: 70%;
    }


    .info-container{
        width: 50%;
        padding: 15px;
        padding-left: 22px;
        border: solid  rgba(0, 0, 0, 0.2) 0.6px;
        box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        background-color: #ffff;
    }

    .text-container{
        text-align: left;
        color: #082777;
    }

    .nome-container{
        display: flex;
        justify-content: end;
        padding-right: 10%;
        color: #082777;
        font-weight: bold;
    }

    @media screen and (max-width:800px) {

        .card-container{
            flex-direction: column;
        }

        .info-container{
            width: 100%;
            margin-top: 40px;
        }

        .img-container{
            justify-content: center;
            margin-left: 20px;

        }

        .text-container{
            text-align: center;
        }
        
    }
</style>