<template lang="">
    <div class="main-container">
        <div class="header">  <p class="label">Cadastro</p><p class="wrapper">></p> <p class="label">Pagamento</p>
        </div>
        <CheckoutFormContainer/>
        <SigninButton/>
    </div>
</template>
<script>

import SigninButton from '@/components/SigninButton.vue';
import CheckoutFormContainer from '@/components/CheckoutFormContainer.vue';

export default {
    components:{
        CheckoutFormContainer,
        SigninButton
    }
}
</script>
<style scoped>
    .main-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }

    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 10px;
        margin-top: 40px;
        color: #082777;
        width: 80%;

        /* margin: auto; */
        text-align: center;
    }

    .label{
        font-size: 30px;
    }

    .wrapper{
        margin-left: 5px;
        margin-right: 5px;
    }
</style>