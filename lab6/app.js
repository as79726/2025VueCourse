const app = Vue.createApp({
    data: function () {
        return {
            counter1: 0,
            todo: '',
            urgent: '',
            checkedUrgent: '',
            counter2: 666
        }
    },
    methods: {
        setUrgent(e) {
            this.urgent = e.target.value
        },
        commitUrgent() {
            this.checkedUrgent = this.urgent
        },
        submitForm(e) {
            // toggle this to show difference
            e.preventDefault()
            alert('表單提交了!')
        },
        submitForm2(e) {
            // no preventDefault() here
            alert('表單2也提交了!')
        },
        setToDo(e, prefix) {
            this.todo = `${prefix} ${e.target.value}`;
        },
        add: function (num) {
            this.counter1 += num;
        },
        reduce: function (num) {
            this.counter1 -= num;
        }
    }
})

app.mount('#app')