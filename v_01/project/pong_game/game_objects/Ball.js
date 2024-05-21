import {Circle} from "../../../io/bamboo_game/2d/g/geom/Circle.js";
export class Ball extends Circle{
	start(){
		console.log("circle");
		this.angle.radius =10;
		this.canvasDimension = this.node.settings.dimension;
		this.position.x = (this.canvasDimension.width/2) + (this.angle.radius/2)
		this.position.y = (this.canvasDimension.height/2) + (this.angle.radius/2)
		this.direction ={ x:-1, y:1}
		this.speed ={x:3,y:10};
	}
	update(){
		this.wallCollision();
		this.move();
		
		
	}
	move(){
		this.position.x = this.position.x + (this.speed.x*this.direction.x);
		this.position.y = this.position.y + (this.speed.y*this.direction.y);
	}

	wallCollision(){
            
            
            if(this.position.y-this.angle.radius <= 0 || this.position.y+this.angle.radius>=this.canvasDimension.height){
                this.direction.y *= -1;
            }
    }

           paddleCollision(){
            
            let collisionPoint = 0
            let angleRad = 0
            
            this.node.objects.forEach(object => {
                
                if(object.constructor.name == "Paddle"){
                    if(this.checkCollision(this, object)){
                        
                        let collisionPoint = (this.getPosition().y - (object.getPosition().y + object.getDimension().height / 2)) / (object.getDimension().height / 2);
                        let angleRad = collisionPoint * (Math.PI / 4); // Max angle deviation = 45 degrees
                        this.direction.x  = (this.getPosition().x < this.canvasWidth / 2) ? 1 : -1;
                        this.speed.x  = this.direction.x * this.maxSpeed * Math.cos(angleRad);
                        this.speed.y  = this.maxSpeed * Math.sin(angleRad);
                        
                      
                    }
                }
                
                if(object.constructor.name == "PaddleAI"){
                     if(this.checkCollisionWithAi(this, object)){
                        
                        let collisionPoint = (this.getPosition().y - (object.getPosition().y + object.getDimension().height / 2)) / (object.getDimension().height / 2);
                        let angleRad = collisionPoint * (Math.PI / 4); // Max angle deviation = 45 degrees
                        this.speed.x  = this.direction.x * this.maxSpeed * Math.cos(angleRad);
                        this.speed.y  = this.maxSpeed * Math.sin(angleRad);   
                        this.direction.x  *=-1 //(this.getPosition().x < this.canvasWidth / 2) ? 1 : -1;
                      //  this.direction.x *= -1;
                     }
                     
                    
                }
            })
        }
 

}


/*
        x = 0;
        y = 0;
        direction = {x:-1,y:-1};
        speed  = {x:7,y:7}
        maxSpeed = 10

        update(){
            this.x = this.getPosition().x + (this.speed.x*this.direction.x);
            this.y = this.getPosition().y + (this.speed.y*this.direction.y);
            this.canvasWidth  = this.context.canvas.width;
            this.canvasHeight = this.context.canvas.height;
            this.position     = this.getPosition();
            this.angle        = this.getAngle();
            this.setPosition(this.x,this.y)
            this.paddleCollision()
            this.wallCollision();
         }		

        paddleCollision(){
            
            let collisionPoint = 0
            let angleRad = 0
            
            this.parent.entity.forEach(object => {
                
                if(object.constructor.name == "Paddle"){
                    if(this.checkCollision(this, object)){
                        
                        let collisionPoint = (this.getPosition().y - (object.getPosition().y + object.getDimension().height / 2)) / (object.getDimension().height / 2);
                        let angleRad = collisionPoint * (Math.PI / 4); // Max angle deviation = 45 degrees
                        this.direction.x  = (this.getPosition().x < this.canvasWidth / 2) ? 1 : -1;
                        this.speed.x  = this.direction.x * this.maxSpeed * Math.cos(angleRad);
                        this.speed.y  = this.maxSpeed * Math.sin(angleRad);
                        
                      
                    }
                }
                
                if(object.constructor.name == "PaddleAI"){
                     if(this.checkCollisionWithAi(this, object)){
                        
                        let collisionPoint = (this.getPosition().y - (object.getPosition().y + object.getDimension().height / 2)) / (object.getDimension().height / 2);
                        let angleRad = collisionPoint * (Math.PI / 4); // Max angle deviation = 45 degrees
                        this.speed.x  = this.direction.x * this.maxSpeed * Math.cos(angleRad);
                        this.speed.y  = this.maxSpeed * Math.sin(angleRad);   
                        this.direction.x  *=-1 //(this.getPosition().x < this.canvasWidth / 2) ? 1 : -1;
                      //  this.direction.x *= -1;
                     }
                     
                    
                }
            })
        }
 
        checkCollision(ball, paddle){
            const cpaddle = {
                top    : paddle.getPosition().y,
                bottom : paddle.getPosition().y + paddle.getDimension().height,
                left   : paddle.getPosition().x,
                right  : paddle.getPosition().x + paddle.getDimension().width

            }
           // console.log(cpaddle)
            const cball = {

                top    : ball.y - ball.angle.radius,
                bottom : ball.y + ball.angle.radius,
                left   : ball.x - ball.angle.radius,
                right  : ball.x + ball.angle.radius
            }

            if((cball.left >= cpaddle.left && cball.left<=cpaddle.right) && cball.top <= cpaddle.bottom && cball.bottom>=cpaddle.top)
                return true

            return false
        }

         checkCollisionWithAi(ball, paddle){
            const cpaddle = {
                top    : paddle.getPosition().y,
                bottom : paddle.getPosition().y + paddle.getDimension().height,
                left   : paddle.getPosition().x,
                right  : paddle.getPosition().x + paddle.getDimension().width,

            }
            //console.log(cpaddle)
            const cball = {
                top    : ball.y - ball.angle.radius,
                bottom : ball.y + ball.angle.radius,
                left   : ball.x - ball.angle.radius,
                right  : ball.x + ball.angle.radius
            }

            
            if((cball.right >= cpaddle.left && cball.right<=cpaddle.right) && cball.top < cpaddle.bottom && cball.bottom>cpaddle.top)
                return true;
            return false
        
        }


        wallCollision(){
            
            
            if(this.y-this.angle.radius <= 0 || this.y+this.angle.radius>=this.canvasHeight){
                this.direction.y *= -1;
            }
        }

        resetPosition(){
             //this.maxSpeed = 15;//(Math.random()*(10 -5)+5);
             this.speed.y = 0
           // const vector =  new Vector3D({}).getRandomVector(200,200)
            this.setPosition(this.canvasWidth/2, this.canvasHeight/2);
        // }*/