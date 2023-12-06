<template>
    <div class="card-container">
            <div class="img-container">
                <img :src="require(`@/assets/${img}`)" alt="depoimento imagem">
            </div>

        <div class="info-container">

            <div class="text-container">
                <p>
                    <strong>"</strong>
                    {{text}}
                    <strong>"</strong>
                </p>
                    
            </div>

            <div class="nome-container">
                <p>
                    <strong>-</strong>
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
        z-index: 2;
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        justify-content: space-between;

    }


    .img-container{
        display: flex;
    }

    .img-container img{
        /* width: 70%; */
        width: 500px;
    }


    .info-container{
        /* width: 80%; */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 15px;
        padding-left: 22px;
        border: solid  rgba(0, 0, 0, 0.2) 0.6px;
        box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        background-color: #ffff;

        width: 530px;
        height: 260px;
        margin-right: 60px;

    
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
            margin-right: 0px;
        }

        .img-container{
            justify-content: center;
            margin-left: 20px;

        }

        .text-container{
            text-align: center;
        }

        .img-container img{
            width: 100%;
            justify-content: center;
        }

        .nome-container{
            justify-content: center;
            padding-left: 10%;
        }

        
    }
</style>