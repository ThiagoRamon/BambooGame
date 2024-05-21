export class KeyPad{
	constructor(){
		
		this.keys = {};
		this.currentKeyDown = ""
		this.setUpListeners();
	}
	setUpListeners(){
		document.addEventListener("keydown", event=>{
			this.keys[event.key] = true;
			this.currentKeyDown = event.key;
		});
		document.addEventListener("keyup", event=>{
			this.keys[event.key] = false;
			this.currentKeyDown = '';
		});
	}
	isKeyPressed(key){
		return this.keys[key]===true;
	}

}