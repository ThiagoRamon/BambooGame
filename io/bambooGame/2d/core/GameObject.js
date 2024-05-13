import {ComponentManager} from "./ComponentManager.js";

export class GameObject{
	
	constructor({parent = null, isAlive=true}){
		this.parent = parent;
		this.context = parent.context;
		this.name = "game";
		this.isAlive = isAlive;
		this.componentManager = new ComponentManager({});
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

	setDimension(width=null, height=null){
		//console.log(this.componentManager.getComponent("dimension"))
		if(width!=null)
			this.componentManager.getComponent("dimension").width = width;
		if(height!=null)
			this.componentManager.getComponent("dimension").height = height;
	}

	getDimension(){
		return this.getComponent("dimension");
	}	

	getComponent(componentName){
		return this.componentManager.getComponent(componentName);
	}
}