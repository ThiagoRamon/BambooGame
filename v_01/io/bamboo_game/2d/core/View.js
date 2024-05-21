import {Canvas2d} from "./Canvas2d.js";
export class View extends Canvas2d{
    constructor({settings = null, node = null}){
        super({settings:settings, node:node});
    }
}