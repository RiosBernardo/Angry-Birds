class Pig extends Base {
  constructor(x, y) {
    var options = {
      "restitution": 0.8,
      "friction": 0.3, 
      "density": 1.0
    }

    super (x, y, 50, 50, options)
    this.image = loadImage ("sprites/enemy.png")
    this.visibility = 255
  }

  display(){
    if (this.body.speed < 3) {
      super.display ()
    } else {
      World.remove(world, this.body)
      push()
      this.visibility = this.visibility -5
      tint(255, this.visibility)
      image(this.image, this.body.position.x, this.body.position.y, 50, 50)
      pop()
    }     
  }

  score(){
    if(this.visibility < 0 & this.visibility > -500){
      score= score +1
    }
  }
}