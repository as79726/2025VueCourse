const app = Vue.createApp({
    data() {
        return {
            div1Selected: false,
            div2Selected: false,
            div3Selected: false
        }
    },
    methods: {
        divSelected(divId) {
            if (divId === 1) {
                this.div1Selected = true;
            } else if (divId === 2) {
                this.div2Selected = true;
            } else if (divId === 3) {
                this.div3Selected = true;
            }
        }
    },
    computed: {
        div1Classes() { return { is1Selected: this.div1Selected } },
        div2Classes() { return { is2Selected: this.div2Selected } },
        div3Classes() { return { is3Selected: this.div3Selected } }
    }
})
app.mount('#app')