<template>
  <h1 class="titulo">Cadastro de Talentos</h1>

  <form>
    <label for="name">Nome completo</label>
    <input type="text" id="name" v-model="name" />

    <label for="email">Email</label>
    <input type="text" id="email" v-model="email" />

    <label for="data-nascimento">Data de Nascimento</label>
    <input type="date" id="data-nascimento" v-model="date_birth" />

    <label for="whatsapp">Whatsapp</label>
    <input type="number" id="whatsapp" v-model="phone" />

    <label for="area-interesse">Área de Interesse</label>
    <select id="area-interesse" v-model="area">
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="fullstack">Fullstack</option>
    </select>

    <label for="nivel-profissional">Nível Profissional</label>
    <select id="nivel-profissional" v-model="nivel">
      <option value="junior">Junior</option>
      <option value="pleno">Pleno</option>
      <option value="senior">Senior</option>
    </select>

    <p>Selecione suas habilidades:</p>
    
    <div class="opcoes" v-if="area === 'frontend' || area === 'fullstack'">
      <label><input type="checkbox" /> Html</label>
      <label><input type="checkbox" /> Css</label>
      <label><input type="checkbox" /> JavaScript</label>
      <label><input type="checkbox" /> Vue</label>
    </div>

    <div class="opcoes" v-if="area === 'backend' || area === 'fullstack'">
        
      <label><input type="checkbox" /> Node</label>
      <label><input type="checkbox" /> Php</label>
      <label><input type="checkbox" /> Laravel</label>
      <label><input type="checkbox" /> Java</label>
    </div>

    

    <textarea cols="30" rows="10">Digite aqui sua carta de apresentação</textarea>

    <button type="submit">Cadastrar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      date_birth: "",
      phone: "",
      area: "",
      nivel: "",
    };
  },
};
</script>

<style scoped>
.titulo {
  font-size: 36px;
  text-align: center;
  color: cadetblue;
  font-weight: bold;
  height: auto;
}

form {
  display: flex;
  flex-direction: column;
}

.opcoes {
    display: flex;
    flex-direction: column;

}
</style>
