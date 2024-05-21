export class Transform{
	constructor({position = {x:0,y:0,z:0}, rotation = {x:0,y:0,z:0}, scale = {x:1,y:1,z:1}}){
	this.position = position;
	this.rotation = rotation;
	this.scale	  = scale;
	}
	
	setPosition(position){
		this.position = position;
	} 
	setPositionXY(x=0, y=0){
		this.position.x = x;
		this.position.y = y;
	}
}