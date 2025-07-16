const app = Vue.createApp({
    data: function () {
        return {
            issue: 'default issue',
            counter: 0
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
    computed: {
        formatIssue() {
            console.log("計算formatIssue", this.issue)
            if (this.issue === "") {
                return ""
            }
            return `[!!]${this.issue}`
        }
    },
    watch: {
        counter(v) {
            if (v > 10) {
                this.counter = 0;
                console.log("counter reset")
            }
        }
    }
})

app.mount('#app')