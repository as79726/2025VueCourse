const {createApp} = Vue 
createApp({
    setup(){
        console.log("vue object會在此創建")
    },
    data() {
        return {
            plans: [],
            value: ''
        }
    },
    methods: {
        addPlan() {
            this.plans.push(this.value)
            this.value = "";
        }
    }
}).mount('#myapp');