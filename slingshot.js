class SlingShot{
constructor(bodyA,pointB){
    var abc1={
       bodyA:bodyA,
       pointB:pointB,
       stiffness:0.04,
       length:10 
    }
   this.pointB=pointB
    this.sling=Constraint.create(abc1)
    World.add(world,this.sling)
}
fly(){
    this.sling.bodyA=null
}
display(){
var pointA=this.sling.bodyA.position
var pointB=this.pointB
strokeWeight(6)
stroke("brown")
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
