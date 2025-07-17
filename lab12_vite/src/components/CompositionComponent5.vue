<template>
    <div>
        <h1>reactive參照到物件...</h1>
        <p>{{ user }}</p>
        <h1>toRefs的ref參照到物件的屬性</h1>
        <p>{{ userName }}</p>
        <p>{{ age }}</p>
    </div>
</template>

<script>
import { isRef, reactive, toRefs } from 'vue';

export default {
    setup() {
        const user = reactive({
            userName: "Mark Ho",
            age: 49
        })
        console.log("reactive user=", user)
        // const userReactiveToRefs = toRefs(user)
        // console.log(" after torefs, ", userReactiveToRefs)
        // console.log("user底下的userName包裝後是ref嗎?", isRef(userReactiveToRefs.userName))
        // console.log("user底下的age包裝後是ref嗎?", isRef(userReactiveToRefs.age))
        const { userName, age } = toRefs(user)
        setTimeout(() => {
            user.userName = "Meng Hang Ho"
            user.age += 1
            setTimeout(() => {
                userName.value = "何孟翰"
                age.value += 5
            }, 2000)
        }, 2000)

        return { user: user, userName: userName, age: age }
    }
}
</script>

<style lang="scss" scoped></style>