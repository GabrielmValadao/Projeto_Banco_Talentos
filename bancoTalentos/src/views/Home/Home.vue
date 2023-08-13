<template>

  <h1 class="titulo">Banco de Talentos</h1>
</template>

<style scoped>
.lista {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.item-lista {
  display: flex;
  border: 1px solid black;
  padding: 5px;
  
  width: 30%;
}

.item-lista li {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  color: black;
  text-decoration: none;
}

.titulo {
  font-size: 36px;
  text-align: center;
  color: cadetblue;
  font-weight: bold;
}
</style>
