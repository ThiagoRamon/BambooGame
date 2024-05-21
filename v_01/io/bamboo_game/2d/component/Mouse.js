export class Mouse{
	constructor(){
		this.clickPosition = {x:0,y:0};
		this.setUpListeners();

	}
	setUpListeners(){
		document.addEventListener("click", event=>{
			this.clickPosition.x = event.offsetX;
			this.clickPosition.y =  event.offsetY
			//console.log(this.clickPosition);
		});
		//document.addEventListener("keyup", event=>{
		//	this.keys[event.key] = false;
			//this.currentKeyDown = '';
		//});
	}
}