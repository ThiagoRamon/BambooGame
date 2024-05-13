import {GameObject} from "../../core/GameObject.js"
import {Angle}      from "../../component/Angle.js"

export class Circle extends GameObject{
	constructor({parent = parent, angle=new Angle({}), color="#fff", fill={style:"#fff",isAlive:true}, stroke ={style:"#000",isAlive:true}}){
		super({parent:parent});
		this.componentManager.addComponent("angle", angle);
		this.angle = angle;
		this.fill      = fill
		this.stroke    = stroke;

	}
	update(){
		this.position = this.componentManager.getComponent("transform").position;
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
			this.componentManager.getComponent("transform").position.x = x;
		if(y!=null)
			this.componentManager.getComponent("transform").position.y = y;
	}
	getPosition(){
		return this.componentManager.getComponent("transform").position;
	}
	getAngle(){
		return this.componentManager.getComponent("angle");
	}
}