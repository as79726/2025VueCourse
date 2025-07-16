const app = Vue.createApp({
    data() {
        return {
            courses: [],
            courseContent: '',
            obj: { name: 'poop', duration: 35, instructor: 'Mark' }
        }
    },
    methods: {
        addCourse() {
            this.courses.push(this.courseContent);
            this.courseContent = '';
        },
        removeCourse(index){
            this.courses.splice(index, 1);
        }
    }
})
app.mount('#app')