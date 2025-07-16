import { createApp } from 'vue'
import App from './App.vue'
import CourseIntro from './components/CourseIntro.vue'
import NewCourse from './components/NewCourse.vue'

const app = createApp(App)
app.component("course-intro",CourseIntro)
app.component("new-course",NewCourse)
app.mount('#app')