export class Vector3D{
	constructor({position = {x:0,y:0,z:0}}){
		this.position = position
	}	

	getRandomVector(min, max){
		this.position.x = this.getRandomNum(min, max)
		this.position.y = this.getRandomNum(min, max)
		return this.position;
	}
	getRandomNum(min, max){
		 return Math.floor(Math.random()*(max - min) + min);
	}
}