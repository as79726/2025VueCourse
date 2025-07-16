var vue = new Vue({
    el:'#myapp',
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
})

/*const { createApp, ref } = Vue
createApp({
    setup() {
        console.log("vue object會在此創建")
        const plans = ref([]);
        const value = ref("");
        function addPlan() {
            plans.value.push(value.value.trm());
            value.value = "";
        }
        return {
            plans:plans,
            value:value,
            addPlan:addPlan
        }
    }
}).mount('#myapp');*/