<template>
    <h1>簡單課程管理系統</h1>
    <new-course  @add-course="addCourse"></new-course>
    <ul>
        <course-intro v-for="course in courses" :key="course.id" :id="course.id" :name="course.name"
            :duration="course.duration" :current="course.current"  @toggle-current="toggleCurrentStatus"></course-intro>
       <!-- <course-intro id="poop" name="python and oop" :duration=35 :current=true></course-intro>
        <course-intro id="bdpy" name="python and big data" :duration=42 :current=false></course-intro>
        <course-intro id="pykt" name="python and big data" :duration=8></course-intro> -->
    </ul>
</template>

<script>
export default {
    data() {
        return {
            courses: [{ id: "poop", name: "python oop", duration: 35, current: true },
            { id: "bdpy", name: "python and big data", duration: 42, current: false },
            { id: "pykt", name: 'keras and tensorflow', duration: 35, current: true }
            ]
        }
    },
    methods:{
        toggleCurrentStatus(id) {
             const course = this.courses.find(c => c.id === id)
            course.current = !course.current
            console.log(`course with id:${id}  changed `)
        },
        addCourse(id, name, duration) {
            const newCourse = { id: id, name: name, duration: duration, current: false };
            this.courses.push(newCourse);
        }
    }
}
</script>
<style>
#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li,
#app form {
    box-shadow: 0 4px 8px rgba(0, 0, 128, 0.26);
    margin: 1rem auto;
    border-radius: 5px;
    text-align: center;
    width: 50%;
    max-width: 40rem;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #FF0077;
    background-color: #C0FFEE;
    color: black;

}
</style>