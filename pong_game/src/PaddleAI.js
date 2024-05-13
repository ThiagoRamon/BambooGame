import {Rectangle}   from "../../io/bambooGame/2d/gui/geom/Rectangle.js"
export class PaddleAI extends Rectangle {
	ball = null;
	speed = 5;
	maxSpeed = 10;
	update(){
		
		this.parent.entity.forEach(object => {
                //console.log(object.constructor.name)
                if(object.constructor.name != "Ball")return
                this.moveAI(object);
		});

		
	
	}
	 moveAI(ball){
                

                 if(!(ball.getPosition().x > this.parent.canvas.width/2))return;
              

                if(!(ball.getPosition().x>0)){
                    this.stop();
                    return;
                };
                
                const paddle2Center = this.getPosition().y + this.getDimension().height/2;
                if(paddle2Center < ball.getPosition().y)
                    this.moveDown();
                else
                    this.moveUp();
          
          		//this.setPosition(null,this.getPosition().y+this.speed)
			
			
		}

     moveUp(){
     		if(this.getPosition().y > 0)
                this.setPosition(null,this.getPosition().y-this.speed)
            }
	moveDown(){
			if((this.getPosition().y+this.getDimension().height)<this.parent.canvas.height)
                this.setPosition(null,this.getPosition().y+this.speed)
            }
    stop(){
                this.speed = 0;
            }
	
}