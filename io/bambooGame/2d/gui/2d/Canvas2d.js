import {CanvasSettings} from "../../config/Settings.js"
export class Canvas2d{
    constructor({canvasSettings = new CanvasSettings({}), isAlive=true}){
        this.canvasSetting = canvasSettings;
        this.canvas  = null;
        this.context = null;
        this.entity  = [];
        this.isAlive = isAlive;
        this.parent = null;
    }
    create(){
        this.canvas = document.createElement("canvas");
        this.canvas.id = this.canvasSetting.canvas_id;
        this.canvas.width = this.canvasSetting.dimention.width;
        this.canvas.height = this.canvasSetting.dimention.height;
        this.context= this.canvas.getContext("2d");
        this.canvas.style.background = this.canvasSetting.style.background
        document.body.prepend(this.canvas)
    }
    update(){
        
       this.entity.forEach(object=>{
            if(!object.isAlive)return;
            if(!this.parent.util.hasOwnProperty(object, "update"))return;
            object.update();
        });
       this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
     }
    render(){
        this.entity.forEach(object=>{
            if(!object.isAlive)return;
            if(!this.parent.util.hasOwnProperty(object, "draw"))return;
            object.draw()
        });
        //console.log("-->canvas render")
    }
    addEntity(object){
        this.entity.push(object);
    }
}