import {ViewController} from "./ViewController.js"
import {Settings} from "./Settings.js"
import {InputHandle} from "./InputHandle.js"
export class BambooEng{
    constructor({settings = null, running = true}){
        this.settings  = settings ?? this.getDefaultSettings();
        this.running   = running;
        this.requestId = 0;
        this.viewController = new ViewController();
        this.inputHandle = new InputHandle({});
    }
    start(){
        if(this.hasCurrentView())
            this.viewController.currentView.start();        
        this.run();

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
        if(!this.hasCurrentView()){
            console.log("please set a current scene")
            this.requestAnimation();
            return;
        }
        this.update();
        this.render();
        this.requestAnimation();
    }
    update(){
        this.getCurrentView().update();
    }
    render(){
        this.getCurrentView().render();
    }
    requestAnimation(){
        this.requestId = window.requestAnimationFrame(()=>this.loop());
        window.cancelAnimationFrame(this.requestId-1);
    }
    isRunning(){
        return this.running;
    }
    getCurrentView(){
        return this.viewController.currentView;
    }
    getDefaultSettings(){
        return new Settings({});
    }
    hasCurrentView(){
        return this.viewController.currentView!=null?true:false;
    }

}