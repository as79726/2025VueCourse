const app = Vue.createApp({
    data() {
        return {
            issue: 'default issue',
            counter: 0,
            formatIssue: ''
        }
    },
    methods: {

        resetIssue() {
            this.issue = ''
        },
        increase() {
            this.counter += 1;
        }
    },
    // computed: {
    //     formatIssue() {
    //         console.log("計算formatIssue", this.issue)
    //         if (this.issue === "") {
    //             return ""
    //         }
    //         return `[!!]${this.issue}`
    //     }
    // },
    watch: {
        issue(v, oldV) {
            console.log(`計算formatIssue, new=${v},old=${oldV}`)
            if (this.issue === "") {
                this.formatIssue = ""
            }
            this.formatIssue = `[!!]${v} from ${oldV}`
        },
        counter(v) {
            if (v > 10) {
                this.counter = 0;
                console.log("counter reset")
            }
        }
    }
})
app.mount('#app')