class Base {
    constructor(x, y, width, height, options) {
    
        // propriedades
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage ("sprites/base.png")
      World.add(world, this.body);
    }
  
    // funcoes / metodos
    display() {
      var position = this.body.position
      push ()
      translate (position.x, position.y)
      rotate (this.body.angle )
      imageMode(CENTER);
      image(this.image, 0, 0, this.width,this.height);
      pop ()
    }
  }