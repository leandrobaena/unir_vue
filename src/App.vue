<script setup lang="ts">
    import Buttons from './components/Buttons.vue'
    import Grid from './components/Grid.vue'
    import Graph from './components/Graph.vue'
    import Chart from 'primevue/chart';
    import { ref } from 'vue'

    const documentStyle = getComputedStyle(document.documentElement);

    const graph = ref(null);

    const products = ref([{
        "type": "Ingreso",
        "date": "01-01-2024",
        "value": 1000
    }, {
        "type": "Ingreso",
        "date": "02-01-2024",
        "value": 2000
    }, {
        "type": "Gasto",
        "date": "03-01-2024",
        "value": 2500
    }]);

    const labels = ref(['']);
    const ingresos = ref([0]);
    const gastos = ref([0]);

    labels.value = calculateLabels(products);
    ingresos.value = calculateIngresos(products);
    gastos.value = calculateGastos(products);

    function addIngreso(date, value) {
        products.value.push({ "type": "Ingreso", "date": date, "value": value });
        labels.value = calculateLabels(products);
        ingresos.value = calculateIngresos(products);
        gastos.value = calculateGastos(products);
        chartData.value = {
            labels: labels.value,
            datasets: [
                {
                    label: 'Ingresos',
                    data: ingresos.value,
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--cyan-500'),
                    tension: 0.4
                },
                {
                    label: 'Gastos',
                    data: gastos.value,
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--gray-500'),
                    tension: 0.4
                }
            ]
        };
    }

    function addGasto(date, value) {
        products.value.push({ "type": "Gasto", "date": date, "value": value });
        labels.value = calculateLabels(products);
        ingresos.value = calculateIngresos(products);
        gastos.value = calculateGastos(products);
        chartData.value = {
            labels: labels.value,
            datasets: [
                {
                    label: 'Ingresos',
                    data: ingresos.value,
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--cyan-500'),
                    tension: 0.4
                },
                {
                    label: 'Gastos',
                    data: gastos.value,
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--gray-500'),
                    tension: 0.4
                }
            ]
        };
    }

    const chartData = ref({
        labels: labels.value,
        datasets: [
            {
                label: 'Ingresos',
                data: ingresos.value,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--cyan-500'),
                tension: 0.4
            },
            {
                label: 'Gastos',
                data: gastos.value,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--gray-500'),
                tension: 0.4
            }
        ]
    });

    function calculateLabels(prods) {
        let response = [];
        products.value.forEach(x => {
            if (!response.find(y => y === x.date)) {
                response.push(x.date);
            }
        });
        return response;
    }

    function calculateIngresos(prods) {
        let response = [];
        products.value.forEach(x => {
            let value = 0;
            products.value.forEach(y => {
                if (y.type === "Ingreso" && x.date === y.date) {
                    value += y.value;
                }
            });
            response.push(value);
        });
        return response;
    }

    function calculateGastos(prods) {
        let response = [];
        products.value.forEach(x => {
            let value = 0;
            products.value.forEach(y => {
                if (y.type === "Gasto" && x.date === y.date) {
                    value += y.value;
                }
            });
            response.push(value);
        });
        return response;
    }
</script>

<template>
    <h1>Gesto de gastos</h1>
    <p>
        Esta aplicación permite visualizar un listado de ingresos y gastos durante un periodo de tiempo determinado,
        pudiendo insertar nuevos registros y visualizando una gráfica del comportamiento de dichos valores.
    </p>
    <p>La aplicación corresponde a la actividad Tecnologías de Javascript de la materia Desarrollo de Aplicaciones en Red</p>
    <div class="buttons">
        <Buttons @add-ingreso="addIngreso" @add-gasto="addGasto"></Buttons>
    </div>
    <div class="grid">
        <Grid :products="products"></Grid>
    </div>
    <div class="graph">
        <Graph :chartData="chartData" ref="graph"></Graph>
    </div>
</template>