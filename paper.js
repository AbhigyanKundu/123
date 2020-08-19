class Paper{
    constructor(){

var options= {
    isStatic :false,
    restitution :0.3,
    friction : 0.5,
    density : 1.2,
   
}

    } 
    display (){
        Matter.Bodies.circle(10,240,3,options,1)
        fill="pink";
        
        
    }
   
}