<template>
    <div>
        <h1>options API的生命周期</h1>
    </div>
</template>

<script>
    export default {
        created(){
            console.log("也幾乎是初始化之後");
        },
        mounted(){
            console.log("掛載元件之後");
        },
        beforeUnmount(){
              console.log("即將移除元件");
        }
    }
</script>

<style lang="scss" scoped>

</style>