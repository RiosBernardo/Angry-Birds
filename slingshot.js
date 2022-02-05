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
        push ()
        imageMode (CENTER)
        image (this.image1, 300, 121)
        image (this.image2, 274, 75)

        if (this.body.bodyA) {
            var pontoA = this.body.bodyA.position
            var pontoB = this.body.pointB
            
            stroke(48, 22, 8)

            if (pontoA.x > 200) {
                strokeWeight(6)
                line(pontoA.x-20, pontoA.y, pontoB.x, pontoB.y)
                line(pontoA.x-20, pontoA.y, pontoB.x-30, pontoB.y)
                image (this.image3, pontoA.x-23, pontoA.y+5, 15, 30)
            } else {
                strokeWeight(4)
                line(pontoA.x-20, pontoA.y, pontoB.x, pontoB.y)
                line(pontoA.x-20, pontoA.y, pontoB.x-30, pontoB.y)
                image (this.image3, pontoA.x-23, pontoA.y+5, 15, 30)
            }
            
        }
        pop ()

    }

    fly () {
        this.body.bodyA = null
    }

    attach(body){
        this.body.bodyA = body
    }
}