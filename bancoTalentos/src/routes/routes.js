// importar as funções do vue router    
import { createRouter, createWebHistory} from "vue-router";

// importar os componentes de telas da aplicação 
import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import TalentNew from '../views/Talent/New/TalentNew.vue'

//configura roteamento com uma variavel 

const router = createRouter({
    history: import.meta.env.BASE_URL,
    routes: [
        {
            path:'/',
            name: 'Home',
            component: Home
        }, 

        {
            path:'/sobre',
            name: 'About',
            component: About
        },

        {
            path: '/talentos/novo',
            name: 'TalentNew',
            component: TalentNew
        }
    ]
})