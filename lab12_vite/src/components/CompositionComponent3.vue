<template>
    <div>
        <h1>ref參照到物件</h1>
        <p>{{ user }}</p>
        <p>userName:{{ user.userName }},age:{{ user.age }}</p>
        <h1>如果不是reactive的就不會變</h1>
        <p>{{ pUserName }},{{ pAge }}</p>
    </div>
</template>
<script>
import {ref} from 'vue';
export default{
    setup(){
        const user = ref({
            userName: "Mark Ho",
            age: 49
        });
        setTimeout(() => {
            user.value.userName = "Meng-Hang Ho"
            user.value.age += 1
        }, 2000)
        return { user: user,pUserName:user.value.userName,pAge:user.value.age }
    }
}
</script>
<style lang="scss" scoped></style>