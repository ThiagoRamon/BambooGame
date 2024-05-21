import {Canvas2d} from "./Canvas2d.js";
export class View extends Canvas2d{
    constructor({settings = null, node = null}){
        super({settings:settings, node:node});
    }
    
    update(){
       this.objects.forEach(object=>{
            //if(!object.isAlive)return;
           // if(!this.node.util.hasOwnProperty(object, "update"))return;
            object.update();
        });
       this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
     }
    render(){
        this.objects.forEach(object=>{
           // if(!object.isAlive)return;
           // if(!this.parent.util.hasOwnProperty(object, "draw"))return;
            object.draw()
        });
        //console.log("-->canvas render")
    }
}