<template>
        <header>
                <ul class="lista">
                        <li class="item-lista">Home</li>
                        <li class="item-lista">Talentos</li>
                        <li class="item-lista">Sobre</li>
                </ul>
        </header>
        <h1 class="titulo">Banco de Talentos</h1>
</template>

<style scoped>

.lista {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        width: 100%;
}

.item-lista {
        border: 1px solid gray; 
        list-style: none;
        padding: 20px 30px;
        margin: 10px;
}
.titulo {
        font-size: 36px;
        text-align: center;
        color: cadetblue;
        font-weight: bold;
}

</style>