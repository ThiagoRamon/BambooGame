import {Canvas2d} from "../gui/2d/Canvas2d.js";
export class GameScene extends Canvas2d {
    constructor({parent=null,canvasSettings = null }){
        super({canvasSettings:canvasSettings})
        this.parent = parent;
        this.create();
    }
}