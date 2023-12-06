<template>
    <div>
      <div class="form-container">
        <div class="input-container">
          <label for="name">Nome:</label>
          <input type="text" id="name" v-model="formData.name" />
        </div>
  
        <div class="input-container">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" />
        </div>
  
        <div class="input-container">
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" v-model="formData.cpf" />
        </div>
  
        <div class="input-container">
          <label for="dob">Data de Nascimento:</label>
          <input type="date" id="dob" v-model="formData.dob" />
        </div>
  
        <div class="input-container">
          <label for="phone">Telefone:</label>
          <input type="tel" id="phone" v-model="formData.phone" />
        </div>
      </div>
  
      <button @click="submitForm">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          cpf: '',
          dob: '',
          phone: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Aqui você pode adicionar a lógica para lidar com os dados do formulário
        console.log('Dados do formulário:', this.formData);
      },
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 400px;
    margin: auto;
  }
  
  .input-container {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  </style>