new Vue({
    el:"#vue-app",
    data:{
        name:'Siam',
        job:'Software Engineer'
    },
    methods:{
        greet: function (time) {
            return "Good " + time + " " + this.name;
        },
        getJob: function()
        {
            return this.job
        }
    }
});