const app = Vue.createApp({
    data() {
        return {
            courses: [
                { id: "POOP", name: "Python OOP", duration: 35, detailsVisible: true },
                { id: "BDPY", name: "Python and Big Data", duration: 35, detailsVisible: true }
            ]
        }
    },
    methods: {
        toggleCourseDetail(course) {
            //this.detailsVisible = !this.detailsVisible
            course.detailsVisible = !course.detailsVisible;
        }
    }
});

app.component("course-content", {
    template: `
    <li>
        <h2>{{course.id}}</h2>
        <button @click="toggleCourseDetail(course)">show detail</button>
        <ul v-if="course.detailsVisible">
            <li>{{course.name}}</li>
            <li>{{course.duration}}</li>
        </ul>
    </li>
    `, data() {
        return {
            course: { id: "POOP", name: "Python OOP", duration: 35, detailsVisible: true }
        }
    }, methods: {
        toggleCourseDetail(course) {
            course.detailsVisible = !course.detailsVisible
        }
    }
});
app.mount('#app')