import {Rectangle} from "../../../io/bamboo_game/2d/g/geom/Rectangle.js";
export class Paddle extends Rectangle {

	start(){
		this.dimension.width  = 20;
		this.dimension.height = 120;
		this.canvasDimension = this.node.settings.dimension;
		this.position.y = this.canvasDimension.height/2 - (this.dimension.height/2);
		this.keypad     = this.node.node.inputHandle.keyPad;
		this.directions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
		this.direction  = ""
		this.speed = 10
		
	}	
	
	update(){
		this.move();
	}

	move(){
		if(!this.isRightDirection())return
		switch (this.keypad.currentKeyDown){
			case "ArrowUp":
				if(this.isCollidingWithTopBorder())return
				this.position.y += -this.speed;
			break;
			case "ArrowDown":
				if(this.isCollidingWithBottmBorder())return
				this.position.y +=  this.speed = 10;
			break;
		}
		
	}

	isRightDirection(){
		return this.directions.includes(this.keypad.currentKeyDown)
	}

	isCollidingWithTopBorder(){
		return ((this.position.y)<=0)
	}
	isCollidingWithBottmBorder(){
		return ((this.position.y+this.dimension.height)>=this.canvasDimension.height)
	}
}