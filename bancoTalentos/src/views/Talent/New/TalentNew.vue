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
      <label><input type="checkbox" value="Html" v-model="skills"/> Html</label>
      <label><input type="checkbox" value="Css" v-model="skills"/> Css</label>
      <label><input type="checkbox" value="JavaScript" v-model="skills"/> JavaScript</label>
      <label><input type="checkbox" value="Vue" v-model="skills"/> Vue</label>
    </div>

    <div class="opcoes" v-if="area === 'backend' || area === 'fullstack'">
        
      <label><input type="checkbox" value="Node" v-model="skills"/> Node</label>
      <label><input type="checkbox" value="Php" v-model="skills"/> Php</label>
      <label><input type="checkbox" value="Laravel" v-model="skills"/> Laravel</label>
      <label><input type="checkbox" value="Java" v-model="skills"/> Java</label>
    </div>

    
    <label for="apresentacao">Carta de apresentação:</label>
    <textarea id="apresentacao" cols="30" rows="10" v-model="apresentacao">aaaa</textarea>

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
      skills: [],
      apresentacao: ''
    };
  },

  method: {
    watch: {
        area(newValue, oldValue) {
            if(newValue !== oldValue)
            this.skills = []
        }
    }
  }
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
    margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
}

.opcoes {
    display: flex;
    flex-direction: column;

}

button {
    color: black;
    background-color: cadetblue;
    font-weight: bold;
    width: 30%;
    height: 30px;
    border: none;
}

button:hover {
    background-color: rgb(121, 190, 192);
}
</style>
