<script setup lang="ts">
    import Buttons from './components/Buttons.vue'
    import Grid from './components/Grid.vue'
    import Graph from './components/Graph.vue'
</script>

<template>
    <h1>Gesto de gastos</h1>
    <p>
        Esta aplicación permite visualizar un listado de ingresos y gastos durante un periodo de tiempo determinado,
        pudiendo insertar nuevos registros y visualizando una gráfica del comportamiento de dichos valores.
    </p>
    <p>La aplicación corresponde a la actividad Tecnologías de Javascript de la materia Desarrollo de Aplicaciones en Red</p>
    <div class="buttons">
        <Buttons></Buttons>
    </div>
    <div class="grid">
        <Grid></Grid>
    </div>
    <div class="graph">
        <Graph></Graph>
    </div>
</template>