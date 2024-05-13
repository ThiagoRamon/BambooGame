import {Settings} from "../config/Settings.js";
import {Util} from "../util/Util.js";
import {InputManager} from "./InputManager.js";
export class BambooGame{
    constructor({settings=new Settings({}), running=true, currentScene=[]}){
        this.running   = running;
        this.settings  = settings;
        this.requestId = 0;
        this.currentScene = null;
        this.util = new Util();
        this.inputManager = new InputManager({});
    }
    run(){
        this.loop();
    }
    loop(){
        if(!this.isRunning())return;
        if(!(this.settings.frameSettings.isFrameTime())){
            this.requestAnimation();
            return;
        }
        if(!this.hasCurrentScene()){
            console.log("please set a current scene")
            this.requestAnimation();
            return;
        }
        this.update();
        this.render();
        this.requestAnimation();
    }
    update(){
        if(!this.currentScene.isAlive)return;
        if(!this.util.hasOwnProperty(this.currentScene, "update"))return;
        this.currentScene.update();

    }
    render(){
        if(!this.currentScene.isAlive)return;
        if(!this.util.hasOwnProperty(this.currentScene, "render"))return;
        this.currentScene.render();
        //console.log("render")
    }
    requestAnimation(){
        this.requestId = window.requestAnimationFrame(()=>this.loop());
        window.cancelAnimationFrame(this.requestId-1);
    }
    isRunning(){
        return this.running;
    }
    hasCurrentScene(){
       //return this.util.isArrayEmpty(this.currentScene);
         return (this.util.isNull(this.currentScene))?false:true;
    }
    setCurrentScene(scene){
        this.currentScene = scene;
    }
}


