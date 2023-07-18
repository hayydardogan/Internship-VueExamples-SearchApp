const app = Vue.createApp({
    data() {
        return {
            itemList: ["elma", "armut", "kiraz", "çilek"],
            search: ""
        }
    },
    methods: {

    },
    computed: {
        filteredList() {
            if(this.search == "") return ;

            return this.itemList.filter(i => i.includes(this.search));
            
        }

    }
}).mount("#app");