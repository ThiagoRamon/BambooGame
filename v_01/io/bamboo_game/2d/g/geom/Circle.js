import {Transform} from "../../component/Transform.js"
import {Dimension} from "../../component/Dimension.js"
import {GameObject} from "../../core/GameObject.js"
import {Angle}      from "../../component/Angle.js"

export class Circle extends GameObject{
	constructor({node = null,x=100,y=100, angle=new Angle({}), color="#fff", fill={style:"#fff",isAlive:true}, stroke ={style:"#000",isAlive:true}}){
		super({node:node});
		this.componentController.addComponent("transform", new Transform({position:{x:x,y:y,z:0}}));
		this.componentController.addComponent("angle", angle);
		this.position    = this.componentController.getComponent("transform").position;
		this.angle       = this.componentController.getComponent("angle", angle);;
		this.fill        = fill
		this.stroke      = stroke;

	}
	
	draw(){
		this.context.beginPath()
		this.context.arc(this.getPosition().x, this.getPosition().y, this.angle.radius, this.angle.startPoint, this.angle.endPoint)
		if(this.fill.isAlive){
			this.context.fillStyle = this.fill.style;
			this.context.fill();
		}
		if(this.stroke.isAlive){
			this.context.strokeStyle = this.stroke.style;
			this.context.stroke();
		}
			
	}
	setPosition(x=null, y=null){
		if(x!=null)
			this.componentController.getComponent("transform").position.x = x;
		if(y!=null)
			this.componentController.getComponent("transform").position.y = y;
	}
	getPosition(){
		return this.componentController.getComponent("transform").position;
	}
	getAngle(){
		return this.componentController.getComponent("angle");
	}
}