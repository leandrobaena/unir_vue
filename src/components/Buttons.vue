<script setup lang="ts">
    import Button from 'primevue/button';
    import Dialog from 'primevue/dialog';
    import InputNumber from 'primevue/inputnumber';
    import InputText from 'primevue/inputtext';
    import { ref } from "vue";

    const emit = defineEmits(['addIngreso', 'addGasto']);

    const fechaIngreso = ref(null);
    const valorIngreso = ref(null);
    const visibleIngreso = ref(false);

    const fechaGasto = ref(null);
    const valorGasto = ref(null);
    const visibleGasto = ref(false);

    function addIngreso() {
        emit('addIngreso', fechaIngreso.value, valorIngreso.value);
        visibleIngreso.value = false;
    }

    function addGasto() {
        emit('addGasto', fechaGasto.value, valorGasto.value);
        visibleGasto.value = false;
    }
</script>

<template>
    <Dialog v-model:visible="visibleIngreso" modal header="Adicionar ingreso" :style="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Ingrese los datos.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="fecha" class="font-semibold w-24">Fecha</label>
            <InputText id="fecha" v-model="fechaIngreso" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="valor" class="font-semibold w-24">Valor</label>
            <InputNumber id="valor" v-model="valorIngreso" :useGrouping="false" class="flex-auto" />
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancelar" severity="secondary" @click="visibleIngreso = false"></Button>
            <Button type="button" label="Insertar" @click="addIngreso"></Button>
        </div>
    </Dialog>
    <Dialog v-model:visible="visibleGasto" modal header="Adicionar gasto" :style="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Ingrese los datos.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="fecha" class="font-semibold w-24">Fecha</label>
            <InputText id="fecha" v-model="fechaGasto" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="valor" class="font-semibold w-24">Valor</label>
            <InputNumber id="valor" v-model="valorGasto" :useGrouping="false" class="flex-auto" />
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancelar" severity="secondary" @click="visibleGasto = false"></Button>
            <Button type="button" label="Insertar" @click="addGasto"></Button>
        </div>
    </Dialog>
    <div class="row">
        <div class="button">
            <Button label="Ingresar ingreso" @click="visibleIngreso = true" />
        </div>
        <div class="button">
            <Button label="Ingresar gasto" @click="visibleGasto =  true" />
        </div>
    </div>
</template>

<style scoped>
    .row {
        display: flex;
    }

    .button {
        flex-direction: column;
        margin: 10px;
    }
</style>
