import {Rectangle} from "../../../io/bamboo_game/2d/g/geom/Rectangle.js";
export class PaddleAI extends Rectangle {
	start(){
		this.dimension.width  = 20;
		this.dimension.height = 120;
		this.position.x = this.node.settings.dimension.width - ((this.dimension.width/2)*3)
		this.position.y = this.node.settings.dimension.height/2 - this.dimension.height/2;
		
	}	
}