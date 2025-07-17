<template>
    <div>
        <h1>Composition Component2</h1>
        <h3>userName:{{ userName }}</h3>
        <p>age:{{ currentAge }}</p>
        <h3>userName2:{{ userName2 }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let userName = "Mark Ho"
let userName2 = ref("Mark Ho")
let currentAge = ref(49)
setTimeout(() => {
    userName = "何孟翰"
    userName2.value = "MengHang Ho"
    currentAge.value += 1
}, 4000)
</script>

<style lang="scss" scoped>

</style>