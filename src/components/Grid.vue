<script setup lang="ts">
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';

    const products = [{
        "type": "Ingreso",
        "date": "01-01-2024",
        "value": "$1.000"
    }];
</script>
<template>
    <DataTable :value="products" tableStyle="min-width: 50rem">
        <Column field="type" header="Tipo de movimiento"></Column>
        <Column field="date" header="Fecha"></Column>
        <Column field="value" header="Valor"></Column>
    </DataTable>
</template>
<style scoped>
</style>
