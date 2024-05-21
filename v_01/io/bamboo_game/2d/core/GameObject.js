
import {ComponentController} from "./ComponentController.js";

export class GameObject{
	
	constructor({node = null, alive=true}){
		this.name    = "GameObject";
		this.node  = node;
		this.context =this.node.context;
		this.alive = alive;
		this.componentController = new ComponentController({});
		
	}

	start(){
		
	}

} 