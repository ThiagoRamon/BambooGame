export class ViewController{
    constructor(){
        this.currentView = null;
        this.views = new Map();
    }
    start(){

    }
    addView(viewName, viewObject){
        this.views.set(viewName, viewObject);
    }
    setCurrentView(viewName){

        for(const[key, object] of this.views){
            if(key!=viewName)break;
            this.currentView = object;
            return
        }
    }

}