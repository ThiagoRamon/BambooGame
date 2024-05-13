import {Circle}   from "../../io/bambooGame/2d/gui/geom/Circle.js"
import {Vector3D}   from "../../io/bambooGame/2d/component/Vector3D.js"
export class Ball extends Circle{

        x = 0;
        y = 0;
        direction = {x:-1,y:-1};
        speed  = {x:6,y:6}
       
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
           
            this.parent.entity.forEach(object => {
                
                if(object.constructor.name == "Paddle"){
                    if(this.checkCollision(this, object))
                        this.direction.x *= -1;
                }
                
                if(object.constructor.name == "PaddleAI"){
                     if(this.checkCollisionWithAi(this, object)){
                        this.direction.x *= -1;   
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
                right  : paddle.getPosition().x + paddle.getDimension().width
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

            if(this.x-this.angle.radius < 0 || this.x+this.angle.radius > this.canvasWidth){
                this.resetPosition();//this.direction.x *= -1;//this.resetPosition();
                
            }
            
            if(this.y-this.angle.radius <= 0 || this.y+this.angle.radius>=this.canvasHeight){
                this.direction.y *= -1;
            }
        }

        resetPosition(){
            const vector =  new Vector3D({}).getRandomVector(200,200)
            this.setPosition(200, 200);
        }
        
}