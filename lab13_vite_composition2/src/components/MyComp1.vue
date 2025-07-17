<template>
    <div>
        <h1>元件1</h1>
        <CourseIntro :courseId="courseId" :courseFullName="courseFullName"></CourseIntro>
        <h3>{{ course }}價格是{{price}}</h3>
        <h3>{{ courseDisplayName }}</h3>
        <button @click="course.duration = course.duration + 7">加一天課</button>
        <button @click="extraDuration">用函數加一天課</button>
        <hr />
        <input placeholder="courseId" v-model="courseId" />
        <input placeholder="courseFullName" v-model="courseFullName" />
        <hr />
        <input type="text" placeholder="alternative course full name" ref="courseFullNameInput">
        <button @click="setCourseFullNameInput">set course full name</button>
    </div>
</template>

<script>
import { reactive,ref, computed, watch, provide } from 'vue';
import CourseIntro from './CourseIntro.vue';

export default {
    components:{CourseIntro},
    setup () {
        const courseId = ref("");
        const courseFullName = ref("");
        const courseFullNameInput = ref();
        const courseDisplayName = computed(function () {
            //console.log('.');
            return courseId.value + '../..' + courseFullName.value;
        });

        const price = ref(24000);
        provide("price", price);
        const course = reactive({name:"POOP",duration:35});
        function extraDuration(){
            course.duration = course.duration + 7;
            price.value += 5000;
        }

        watch([price, courseId], function (newValue, oldValue) {
            //console.log(newValue)
            //console.log(oldValue)
            console.log(`price goes from ${oldValue[0]} to ${newValue[0]}`)
            console.log(`name goes from ${oldValue[1]} to ${newValue[1]}`)
        })

        function setCourseFullNameInput(){
            courseFullName.value = courseFullNameInput.value.value;
        }
        // function setCourseId(e) {
        //     courseId.value = e.target.value
        // }
        // function setCourseFullName(e) {
        //     courseFullName.value = e.target.value
        // }
        return {
            course, extraDuration, price, courseDisplayName,
            courseId, courseFullName, courseFullNameInput, setCourseFullNameInput
        }
    }
}
</script>

<style lang="scss" scoped>

</style>