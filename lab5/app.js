const app = Vue.createApp({
    data: function () {
        return {
            primaryGoal1: "Have a <em>happy</em> life",
            primaryGoal2: "Have a <em>healthy</em> body",
            primaryGoal3: "Have a <em>strong</em> mind",
            planLink: "https://trello.com/"
        }
    },
    methods: {
        outputMessage: function () {
            const number1 = Math.random()
            if (number1 < 0.3) {
                return this.primaryGoal1;
            } else if (number1 < 0.6) {
                return this.primaryGoal2;
            } else {
                return this.primaryGoal3;
            }
        }
    }
})

app.mount('#my-planner')