<template>
    <div>
        <h1>物件維持reactivity</h1>
        <p>{{ user }}</p>
        <h1>物件的屬性維持reactivity</h1>
        <p>{{ userName }}</p>
        <p>{{ age }}</p>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
    setup() {
        // define reactive variable
        const user = reactive({
            userName: "Mark Ho",
            age: 49
        })
        // operate the reactive object
        setTimeout(() => {
            user.userName = "Meng Hang Ho"
            user.age += 1
        }, 2000)

        return { user, ...toRefs(user) }
    }
}
</script>

<style lang="scss" scoped></style>