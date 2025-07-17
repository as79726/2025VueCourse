<template>
    <div>
        <h1>reactive參照到物件</h1>
        <p>{{ user }}</p>
        <p>userName:{{ user.userName }},age:{{ user.age }}</p>
        <h1>如果不是reactive的就不會變</h1>
        <p>{{ pUserName }},{{ pAge }}</p>
    </div>
</template>
<script>
import { reactive,isRef,isReactive } from 'vue';
export default{
    setup(){
        const user = reactive({
            userName: "Mark Ho",
            age: 49
        });
        console.log("user is reactive?", isReactive(user));
        console.log("user is ref?", isRef(user));
        console.log("user.userName is reactive?", isReactive(user.userName));
        console.log("user.age is reactive?", isReactive(user.age));
        setTimeout(() => {
            user.userName = "Meng Hang Ho"
            user.age += 1
        }, 2000)
        return { user: user, pUserName: user.userName, pAge: user.age }
    }
}
</script>

<style lang="scss" scoped></style>