new Vue({
    el:"#vue-app",
    data:{
        age : 26,
        x:0,
        y:0
    },
    methods:
    {
        add: function(inc)
        {
            this.age += inc;
        },
        subtract: function (dec)
        {
            this.age -= dec;
        },
        updateXY: function(event)
        {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function()
        {
            alert("You Clicked");
        }
    }
});

//https://vuejs.org/v2/guide/events.html#Event-Modifiers