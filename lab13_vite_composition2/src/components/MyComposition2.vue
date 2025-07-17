<template>
    <div>
        <h1>composition API的生命周期</h1>
    </div>
</template>

<script>
    import { onMounted,onBeforeUnmount } from 'vue';
    export default {
        setup(){
            console.log("元件初始化");
            onMounted(function(){
                console.log("composition api掛載之後");
            });

            onBeforeUnmount(function(){
                console.log("composition即將移除元件");
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>