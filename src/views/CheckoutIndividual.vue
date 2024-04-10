<template lang="">
    <div class="main-container">
        <div class="header">  <p class="label">Cadastro</p><p class="wrapper">></p> <p class="label">Pagamento</p>
        </div>
        <CheckoutFormContainer ref="formContainer"
        :form="form"
        @form-data-updated="atualizarFormulario($event)"/>
        <SigninButton @click="enviarFormulario"
        :class="{ 'loading': loading }"/>
    </div>
</template>
<script>

import SigninButton from '@/components/SigninButton.vue';
import CheckoutFormContainer from '@/components/CheckoutFormContainer.vue';
import api from "@/services/api"

export default {
    components:{
        CheckoutFormContainer,
        SigninButton
    },

    data() {
        return {
            form:{
                nome: '',
                email: '',
                cpf: '',
                dob: '',
                phone: '',
            },

            value: 79.9,
            loading: false,

            okToSubmit: false,

            vendor_code:''
        }
    },

    methods:{

    async enviarFormulario() {

        for (const key in this.form) {
        if (this.form[key] === '') {
        window.alert(`Informe seu ${key}`)
        return
        } else {
            const idade = parseInt(this.form.dob.substring(0, 4), 10)
            const anoAtual = new Date().getFullYear();
            if((anoAtual - idade) < 14){
                window.alert('Menor de 14 anos')
                return
            }else{
                this.okToSubmit = true
            }
            
        }
        }

        if(this.okToSubmit===true){
            window.alert('Seus dados estão sendo processados aguarde um instante!')
            try {
                this.coletarDadosDoFormulario();
                setTimeout(() => {
                    this.gerarCobranca();
                }, 15000);

                setTimeout(() => {
                    this.redirectPagamento();
                }, 30000);
            } catch (error) {
                window.alert('Ocorreu um erro, tente novamente em alguns instantes')
                console.error(error);
            } 
        }

       
    },

    coletarDadosDoFormulario() {

    console.log(this.form)

    const dadosUsuario = {
        cpf: this.form.cpf,
        nome: this.form.nome,
        email: this.form.email,
        telefone: this.form.phone,
        dataNascimento: this.form.dob,
        // value: 58.9
    };

    this.adicionarUsuario(dadosUsuario)

    },

    async gerarCobranca(){
        try {

            const body = {
                cpf: this.form.cpf,
                value: this.value,
                vendor_code: this.vendor_code
            }

            // const assinatura = await api.post('/gerar-assinatura', body)
            // console.log('assinatua gerada com sucesso', assinatura.data)

            // setTimeout( async ()=>{
                const response = await api.post('/gerar-cobranca', body)
                console.log('cobrança criada com sucesso:', response.data)
                this.enviarEmail()
                this.redirectPagamento()
            // }, 10000)

            
        } catch (error) {
            console.error(error)
        }
    },

    async redirectPagamento() {
    try {
        const cpf = this.form.cpf;
        console.log(cpf)
        const response = await api.get(`/retornar-link-de-cobranca?cpf=${cpf}`);
        const link = response.data.data
        console.log(link); // Verifique se os dados estão dentro de response.data
        window.location.href = link; // Se deseja redirecionar após receber o link
    } catch (error) {
        console.log(error);
    }
    },

    async adicionarUsuario(dadosUsuario) {
        try {
        // Faz a requisição POST para adicionar o usuário
        const response = await api.post('/adicionar-usuario', dadosUsuario);
        
        // Trate a resposta conforme necessário
        console.log('Usuário adicionado com sucesso:', response.data);
        
        // Redirecione ou faça outras ações conforme necessário
        } catch (error) {
        console.error('Erro ao adicionar usuário:', error.message);
        // Lide com o erro conforme necessário
        }
    },

    atualizarFormulario(newFormData) {
        this.form = newFormData
    },

    async listarUsuarios() {
        try {
            const {data} = await api.get('/listar-usuarios')
            console.log(data)
        } catch (error) {
            console.error(error)
        }

    },

    async enviarEmail(){
        const body = {
            nome: this.form.nome,
            email: this.form.email
        }

        try {
            const response = await api.post('/enviar-email-poscompra', body)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    },
    getCodigoVendedor(){
        const vendor_code = localStorage.getItem('vendor_code')
        if(vendor_code){
            this.vendor_code = vendor_code
            console.log(this.vendor_code)

            if(this.vendor_code === 'vivianePT'){
                this.price = 100 
            }
        } else {
            console.log('não há código de vendedor')
        }

    }


  },
    mounted() {
        // this.listarUsuarios()
        this.getCodigoVendedor()
        console.log(this.form.cpf)
    }
}
</script>
<style scoped>
    .main-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 120vh;
    }

    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 10px;
        margin-top: 20px;
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

    .button-container{
        height: 20vh;
    }

    @media screen and (max-width:800px) {
        .label{
            font-size: 20px;
        }   
        .wrapper{
            font-size: 20px;
        }
    }
</style>