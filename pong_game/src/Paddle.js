import {Rectangle}   from "../../io/bambooGame/2d/gui/geom/Rectangle.js"
export class Paddle extends Rectangle {
	update(){
		
		if(this.parent.parent.inputManager.keyPad.isKeyPressed("ArrowUp"))
			if(!(this.getPosition().y<=0))
				this.setPosition(null,this.getPosition().y-10)
		if(this.parent.parent.inputManager.keyPad.isKeyPressed("ArrowDown"))
			if(!((this.getPosition().y+this.getDimension().height)>=this.parent.canvas.height))
			this.setPosition(null,this.getPosition().y+10)
	
	}
}