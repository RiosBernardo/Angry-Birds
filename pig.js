class Pig extends Base {
    constructor(x, y) {
        var options = {
            "restitution": 0.8,
            "friction": 0.3, 
            "density": 1.0
        }
        super (x, y, 50, 50, options)
        this.image = loadImage ("sprites/enemy.png")
    }
  }