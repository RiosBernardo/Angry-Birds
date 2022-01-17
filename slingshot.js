class Slingshot {
constructor (bodyA, pointB) {
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
      }
    
      this.body = Constraint.create (options)
      this.image1 = loadImage ('sprites/sling1.png')
      this.image2 = loadImage ('sprites/sling2.png')
      this.image3 = loadImage ('sprites/sling3.png')

      World.add (world, this.body)
}

display() {
    var pontoA = this.body.bodyA.position
    var pontoB = this.body.pointB

    push ()
    imageMode (CENTER)
    image (this.image1, 300, 121)
    image (this.image2, 274, 75)

    line(pontoA.x-20, pontoA.y, pontoB.x, pontoB.y)
    line(pontoA.x-20, pontoA.y, pontoB.x-30, pontoB.y)
    pop ()
}
}