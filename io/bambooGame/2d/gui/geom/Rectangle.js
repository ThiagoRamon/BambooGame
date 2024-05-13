import {GameObject} from "../../core/GameObject.js"
export class Rectangle extends GameObject{

	constructor({parent:parent, dimension = {width:20, height:10}, color="#fff",fill={style:"#fff",isAlive:true}, stroke ={style:"#000",isAlive:true}}){
		super({parent:parent})
		this.color = color;
		this.componentManager.getComponent("dimension").width = dimension.width;
		this.componentManager.getComponent("dimension").height = dimension.height;
		this.dimension = this.componentManager.getComponent("dimension")
		this.position  = this.componentManager.getComponent("transform").position;
		this.fill = fill;
		this.stroke  = stroke;
	}

	draw(){
		
		//this.componentManager.component["transform"].position = {x:20, y:20}
		//this.componentManager.component["dimention"] = {width:40,height:40}
		this.x = this.position.x
		this.y = this.position.y;
		this.width  = this.dimension.width;
		this.height = this.dimension.height;
		this.context.fillStyle = this.color;
		this.context.beginPath();
		

		if(this.fill.isAlive){
			this.context.fillStyle = this.fill.style;
			this.context.fillRect(this.x, this.y, this.width, this.height);
		}
		if(this.stroke.isAlive){
			this.context.strokeStyle = this.stroke.style;
			//this.context.stroke();
			this.context.strokeRect(this.x, this.y, this.width, this.height);
		}
		this.context.closePath();
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