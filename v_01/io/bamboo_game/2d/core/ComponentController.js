export class ComponentController{

	constructor(){
		this.component = new Map();
	
	}
	addComponent(key,value=null){
		this.component.set(key, value);
	}
	getComponent(component){
		return this.component.get(component);
	}


}