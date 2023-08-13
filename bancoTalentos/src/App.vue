<template>
    <header>
    <ul class="lista">
      <router-link to="/" class="item-lista">
        <li>
          <h2>Home</h2>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/glyph-neue/64/home--v1.png"
            alt="imagem home"
          />
        </li>
      </router-link>

      <router-link to="/talentos/novo" class="item-lista">
        <li>
          <h2>Talentos</h2>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/folder-invoices--v2.png"
            alt="imagem talentos"
          />
        </li>
      </router-link>

      <router-link to="/sobre" class="item-lista">
        <li>
          <h2>Sobre</h2>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/glyph-neue/64/about--v1.png"
            alt="imagem sobre"
          />
        </li>
      </router-link>
    </ul>
  </header>

    <router-view></router-view>
</template>

<style scoped>
    .lista {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.item-lista {
  display: flex;
  border: 4px solid cadetblue;
  padding: 5px;
  width: 30%;
}

.item-lista li {
  display: flex;
  align-items: center;
  gap: 10px;
  
  
}

.item-lista:link {
    text-decoration: none; 
}

h2 {
    color: cadetblue;
}


</style>