import {Canvas2d} from "../gui/2d/Canvas2d.js";
export class Scene extends Canvas2d {
    constructor({parent=null,canvasSettings = null }){
        super({})
        this.parent = parent;
        this.create();
    }
}