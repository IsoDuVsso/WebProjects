import { createApp } from 'vue';

const vm = createApp({
    data() {
        return {
            bouton1: '<',
            bouton2: '>',
            source: '//unsplash.it/675/315'

        }
    },
    methods: {
        callToWeatherApi(){
            let id = Math.ceil(Math.random()*1000);
            let url = "https://jsonplaceholder.typicode.com/photos/"+id;
            axios.get(url).then(reponse => {
                let source = reponse.data.url.replace('600', '700');
                this.source = source;
            });
        }
    }

});

vm.mount('#app');
    
    
