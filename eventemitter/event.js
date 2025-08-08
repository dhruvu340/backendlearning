
const Event=require("events");
class event1 extends Event{
    constructor(){
        super();
        this.greeting="hello";
    }

    greet(input){
        this.emit("greeting",`${input}`)
    }
}

const event2=new event1();

event2.on("greeting",(name)=>{
console.log(name);

    
})

event2.greet("dhruv");