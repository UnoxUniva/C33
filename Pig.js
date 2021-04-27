class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visibility=255
    this.image = loadImage("sprites/enemy.png");
  }
  display(){


var position=this.body.position
    // console.log(this.body.speed)
    if(this.body.speed>3){
      World.remove(world,this.body)
    push()
      tint(255,this.visibility)

      image(this.image,this.body.position.x,this.body.position.y,50,50)
pop()

      this.visibility= this.visibility-5
    }else{
      super.display()
    }
  }
  score(){
    if(this.visibility<255 && this.visibility>0){
      score = score + 5
    }
  }

};