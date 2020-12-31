class Log extends Base{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/wood2.png");
      this.body.friction =1.0;
      Matter.Body.setAngle(this.body, angle);
    }
  }