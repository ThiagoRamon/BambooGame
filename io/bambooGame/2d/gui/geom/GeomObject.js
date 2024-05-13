
import {ComponentManager} from "../../core/ComponentManager.js"
export class GeomObject{
	constructor({parent = "", isAlive=true, componentManager = new ComponentManager()}){
		this.parent           = parent;
		this.context          = parent.context;
		this.isAlive          = isAlive
		this.componentManager = componentManager;
	}
	addComponent(component){
		this.componentManager.addComponent()
	}
}