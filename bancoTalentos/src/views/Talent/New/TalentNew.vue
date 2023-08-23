<template>
  <h1 class="titulo">Cadastro de Talentos</h1>

  <form @submit.prevent="submit">
    <label for="name">Nome completo</label>
    <input type="text" id="name" v-model="name" />
    <span>
      {{ this.errors.name }}
    </span>

    <label for="email">Email</label>
    <input type="text" id="email" v-model="email" />
    <span>
      {{ this.errors.email }}
    </span>
    <label for="data-nascimento">Data de Nascimento</label>
    <input type="date" id="data-nascimento" v-model="date_birth" />
    <span>
      {{ this.errors.date_birth }}
    </span>
    <label for="whatsapp">Whatsapp</label>
    <input type="text" id="whatsapp" v-model="phone" />
    <span>
      {{ this.errors.phone }}
    </span>
    <label for="area-interesse">Área de Interesse</label>
    <select id="area-interesse" v-model="area">
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="fullstack">Fullstack</option>
    </select>
    <span>
      {{ this.errors.area }}
    </span>
    <p>Selecione suas habilidades:</p>

    <div class="opcoes" v-if="area === 'frontend' || area === 'fullstack'">
      <label
        ><input type="checkbox" value="Html" v-model="skills" /> Html</label
      >
      <label><input type="checkbox" value="Css" v-model="skills" /> Css</label>
      <label
        ><input type="checkbox" value="JavaScript" v-model="skills" />
        JavaScript</label
      >
      <label><input type="checkbox" value="Vue" v-model="skills" /> Vue</label>
    </div>

    <div class="opcoes" v-if="area === 'backend' || area === 'fullstack'">
      <label
        ><input type="checkbox" value="Node" v-model="skills" /> Node</label
      >
      <label><input type="checkbox" value="Php" v-model="skills" /> Php</label>
      <label
        ><input type="checkbox" value="Laravel" v-model="skills" />
        Laravel</label
      >
      <label
        ><input type="checkbox" value="Java" v-model="skills" /> Java</label
      >
    </div>
    <label for="nivel-profissional">Nível Profissional</label>
    <select id="nivel-profissional" v-model="nivel">
      <option value="junior">Junior</option>
      <option value="pleno">Pleno</option>
      <option value="senior">Senior</option>
    </select>
    <span>
      {{ this.errors.nivel }}
    </span>

    <label for="apresentacao">Carta de apresentação:</label>
    <textarea
      id="apresentacao"
      cols="30"
      rows="10"
      placeholder="Digite sua carta de recomendação"
      v-model="apresentacao"
    ></textarea>

    <button type="submit">Cadastrar</button>
  </form>
</template>

<script>
import * as yup from "yup";
import { captureErrorYup } from "../../../utils/captureErrorsYup";
import axios from "axios";

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
      apresentacao: "",
      errors: {},
    };
  },

  methods: {
    submit() {
      try {
        const schema = yup.object().shape({
          name: yup.string().required("Nome é obrigatório!"),
          email: yup
            .string()
            .email("E-mail inválido")
            .required("E-mail é obrigatório"),

          phone: yup.string().required("Informe seu numero de telefone"),
          area: yup.string().required("Informe sua área de interesse!"),
          nivel: yup.string().required("Informe seu nível de conhecimento!"),
          skills: yup.string().required("Informe suas habilidades"),
        });

        schema.validateSync(
          {
            name: this.name,
            email: this.email,
            data_birth: this.data_birth,
            phone: this.phone,
            area: this.area,
            nivel: this.nivel,
            skills: this.skills,
          },
          //pega todos os erros do try
          { abortEarly: false }
        );

        axios.post(`http://localhost:50001/talentos`,{
          data: {
            name: this.name,
            email: this.email,
            date_birth: this.data_birth,
            phone: this.phone,
            area: this.area,
            nivel: this.nivel,
            skills: this.skills,
            bio: this.apresentacao,
          }
        })
          .then(() => {
            alert('Cadastrado com sucesso!')
            this.$router.push('/')
          })

          .catch(() => {
            alert("Erro ao efetuar o cadastro!");
          });
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          // captura o erro para informar na tela
          this.errors = captureErrorYup(error);
        }
      }
    },
  },

  watch: {
    area(newValue, oldValue) {
      if (newValue !== oldValue) this.skills = [];
    },
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
}

input,
textarea {
  padding: 10px;
  border-radius: 5px;
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

span {
  color: red;
  padding: 5px;
}
</style>
