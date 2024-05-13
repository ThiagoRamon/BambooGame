export class KeyPad{
	constructor(){
		this.keys = {};
		this.setUpListeners();
	}
	setUpListeners(){
		document.addEventListener("keydown", event=>{
			this.keys[event.key] = true;
		});
		document.addEventListener("keyup", event=>{
			this.keys[event.key] = false;
		});
	}
	isKeyPressed(key){
		return this.keys[key]===true;
	}
}