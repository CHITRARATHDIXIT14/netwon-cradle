class ball {

    constructor(x,y,radius){

    var options = {

     isStatic:true


    }

    this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius
    World.add(world,this.body)


    function display(){

    var pos=this.body.position
    rectMode(CENTER)
    ellipse(pos.x,pos.y,this.radius)







    }

















    }




























}