import {Dimension} from "../component/Dimension.js"
import {Transform} from "../component/Transform.js"
export class ComponentManager{
	constructor({dimension = new Dimension({}), transform = new Transform({}) }){
		this.component = [];
		this.addComponent("dimension",dimension);
		this.addComponent("transform",transform);
	
	}
	addComponent(key,value=null){
		this.component[key] = value;
	}
	getComponent(component){
		return this.component[component];
	}
}