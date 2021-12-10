new Vue({
    el:"#histo",
    data:{
        website:'http://localhost:8091/factureapre/',
        liste:{},
        id:'',
    },
    methods:{

    },
    mounted(){
        axios.get(this.website+this.id).then(({data})=>{
            console.log(this.liste=data.date)
            this.liste=data.date
        })
    }
})
