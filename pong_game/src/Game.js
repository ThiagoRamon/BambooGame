import {BambooGame} from "../../io/bambooGame/2d/core/BambooGame.js"
import {Vector3D}   from "../../io/bambooGame/2d/component/Vector3D.js"
import {Scene}      from "./Scene.js"
import {Ball}       from "./Ball.js"
import {Paddle}       from "./Paddle.js"
import {PaddleAI}       from "./PaddleAI.js"
export class Game extends BambooGame{
	
	start(){

		const pong_table = new Scene({parent:this, canvasSettings:this.settings.canvasSettings}) 
		
		const player = new Paddle({parent:pong_table, });
		player.setPosition(10, pong_table.canvas.width/2-50);
		player.setDimension(20, 100);
		player.stroke.isAlive = false;
		
		pong_table.addEntity(player);

		const AI = new PaddleAI({parent:pong_table});
		AI.setPosition(pong_table.canvas.width-40, pong_table.canvas.width/2-50);
		AI.setDimension(20, 100);
	    
	    pong_table.addEntity(AI);

		const ball   = new Ball({parent:pong_table});
		ball.getComponent("angle").radius = 10;
	    ball.componentManager.getComponent("transform").setPosition(new Vector3D({}).getRandomVector(200,200));
    	
    	pong_table.addEntity(ball);

		this.setCurrentScene(pong_table);
		this.run();
	}	
	
}

