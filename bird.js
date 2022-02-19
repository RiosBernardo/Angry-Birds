class Bird extends Base {
    constructor(x, y) {
        var options = {
            "restitution": 0.5,
            "friction": 0.3, 
            "density": 2.5
        }
        super (x, y, 50, 50, options)
        this.image = loadImage ("sprites/bird.png")
        this.imageSmoke = loadImage ("sprites/smoke.png")
        this.trajectory =  [] 
    }
  

    display() {
      super.display ()

      if (this.body.velocity.x > 10 && this.body.position.x > 300 && gameState === "playing"){
        var position = [this.body.position.x, this.body.position.y]
        this.trajectory.push (position)  
      }
     
      for (var item = 0; item < this.trajectory.length; item++) {
      image(this.imageSmoke, this.trajectory [item][0], this.trajectory [item][1])
      }
    }
    
  }