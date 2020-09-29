<template>
    <input type="text" class="border border-black border-solid p-2 rounded">
    <p>{{ warehouses[Object.keys(warehouses)[0]].name }}</p>
    <button class="border border-black border-solid bg-gray-500 p-2 m-2 rounded">Add</button>
</template>

<script>
import warehouseData from '../assets/warehouses.json'

export default {
    data(){
        return{
            warehouses: warehouseData,
        }   
    }   
}
</script>