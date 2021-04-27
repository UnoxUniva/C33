class  Slingshot{
constructor(body1,point2){
    var options= {
        bodyA : body1,
        pointB : point2,
        stiffness:0.2,
        length: 10

        
    }
    this.sling=Constraint.create(options)

    this.sling1= loadImage("sprites/sling1.png")
    this.sling2= loadImage("sprites/sling2.png")
    this.sling3= loadImage("sprites/sling3.png")

    

    World.add(world,this.sling)
}
display(){

    image(this.sling1,225,80,40,140)
    image(this.sling2,200,75,40,90)
  
    if(this.sling.bodyA){
        var firstpos = this.sling.bodyA.position;
        var secpos = this.sling.pointB;
     
         
         push()

         if(firstpos.x>220){
             stroke("#54270F")
            strokeWeight(7)
            line(firstpos.x-15,firstpos.y,secpos.x-15,secpos.y)
            line(firstpos.x+15,firstpos.y,secpos.x+25,secpos.y)
         }else{
             stroke("#54270F")
            strokeWeight(3)
            line(firstpos.x-15,firstpos.y,secpos.x-15,secpos.y)
            line(firstpos.x+15,firstpos.y,secpos.x+25,secpos.y)
         }
     pop()
    }
}
fly(){
    this.sling.bodyA=null
}

attach(body1){
this.sling.bodyA=body1
}
}