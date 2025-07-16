const app = Vue.createApp({
    data: function () {
        return {
            counter1: 0
        }
    },
    methods: {
        add: function(num){
            this.counter1 += num;
        },
        reduce:function(num){
            this.counter1 -= num;
        }
    }
})

app.mount('#app')