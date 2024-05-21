import {KeyPad} from "../component/KeyPad.js"
import {Mouse} from "../component/Mouse.js"
export class InputHandle {
	constructor({keyPad = new KeyPad(), mouse = new Mouse()}){
		this.keyPad = keyPad;
		this.mouse = mouse;
	}

}