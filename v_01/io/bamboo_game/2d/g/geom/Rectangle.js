import {Transform} from "../../component/Transform.js"
import {Dimension} from "../../component/Dimension.js"
import {GameObject} from "../../core/GameObject.js"
export class Rectangle extends GameObject{

	constructor({node:node, x=10, y=20, width=10, height=10, fill={style:'red'}, stroke=null}){
		super({node:node})

		this.componentController.addComponent("dimension", new Dimension({width:width, height:height}));
		this.componentController.addComponent("transform", new Transform({position:{x:x,y:y,z:0}}));
		this.position    = this.componentController.getComponent("transform").position;
		this.dimension   = this.componentController.getComponent("dimension");
		
		this.fill = fill
		this.stroke = stroke;
		
	}
	start(){
		
	}
	draw(){

		this.x = this.position.x
		this.y = this.position.y;
		this.width  = this.dimension.width;
		this.height = this.dimension.height;
		this.context.save();
		this.context.beginPath();
		
		if(this.fill!=null)
			this.context.fillStyle = this.fill.style;
		this.context.fillRect(this.x, this.y, this.width, this.height);
		
		if(this.stroke!=null){
			this.context.strokeStyle = this.stroke.style;
			this.context.strokeRect(this.x, this.y, this.width, this.height);
			this.context.stroke();
		}


		this.context.closePath();
		this.context.restore();

	}
	update(){

		

	}

	wallDistance(x1,y1, x2,y2){
		  // Calculate the difference between the x and y coordinates of the two points.
		  let deltaX = x2 - x1;
		  let deltaY = y2 - y1;

		  // Square the differences.
		  deltaX *= deltaX;
		  deltaY *= deltaY;

		  // Add the squares together.
		  let distanceSquared = deltaX + deltaY;

		  // Take the square root of the sum to get the distance.
		  return Math.sqrt(distanceSquared);
	}


}