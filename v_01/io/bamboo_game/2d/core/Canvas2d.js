import {CanvasSettings} from "./Settings.js"
export class Canvas2d{
    constructor({settings = null, alive = true, node = null}){
        let windoDimension = {width:window.innerWidth, height:window.innerHeight}
        this.settings = settings ?? new CanvasSettings({dimension:windoDimension});
        this.canvas  = null;
        this.context = null;
        this.objects  = [];
        this.alive   = alive;
        this.node    = node;
        this.canvas                  = document.createElement("canvas");
        this.canvas.id               = this.settings.canvas_id;
        this.canvas.width            = this.settings.dimension.width;
        this.canvas.height           = this.settings.dimension.height;
        this.canvas.style.background = this.settings.style.background
        this.context                 = this.canvas.getContext("2d");
      
    }
    start(){
        console.log()
        this.startObjects();
        document.body.prepend(this.canvas)
    }
    startObjects(){
        this.objects.forEach(object =>{
            object.start();
        });
    }
    addObject(object){
        this.objects.push(object);
    }
   /* update(){
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
    }*/
}