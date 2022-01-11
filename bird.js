class Bird extends Base {
    constructor(x, y) {
        var options = {
            "restitution": 0.5,
            "friction": 0.3, 
            "density": 2.5
        }
        super (x, y, 50, 50, options)
        this.image = loadImage ("sprites/bird.png")
    }
  

    display() {
      var position = this.body.position
      position.x = mouseX
      position.y = mouseY
      super.display ()
    }
    
  }