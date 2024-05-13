import {KeyPad} from "../component/KeyPad.js"
export class InputManager {
	constructor({keyPad = new KeyPad()}){
		this.keyPad = keyPad;
	}

}