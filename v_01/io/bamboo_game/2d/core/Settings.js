export class CanvasSettings{
    constructor({canvas_id="canvas_default", dimension={width:400, height:400}, style={background:"lightBlue"}}){
        this.canvas_id = canvas_id;
        this.dimension = dimension;
        this.style = style;
    }
}
export class FrameSettings{
    constructor({frameRate=64, lastFrameTime=0, frameInterval=0, currentTime=0, deltaTime=0}){

        this.frameRate     = frameRate;
        this.lastFrameTime = lastFrameTime;
        this.frameInterval = 1000/frameRate;
        this.currentTime   = currentTime;
        this.deltaTime     = deltaTime;
    }
    isFrameTime(){
        this.currentTime=performance.now()
        this.deltaTime   = this.currentTime-this.lastFrameTime;
        if(!(this.deltaTime >= this.frameInterval))return false;
        this.lastFrameTime =this.currentTime - (this.deltaTime %this.frameInterval);
        return true;
    }

}

export class Settings{
    constructor({frameSettings=new FrameSettings({}), canvasSettings=new CanvasSettings({})}){
        this.frameSettings  = frameSettings;
        this.canvasSettings = canvasSettings;
    }
}