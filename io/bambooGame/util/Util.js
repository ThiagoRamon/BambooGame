export class Util{
    isNull(element){
            return element != null ? false : true;
    }
    isArrayEmpty(element = []){
        return element.length > 0 ? true : false;
    }
    hasOwnProperty(object = null, property = null){
        if(this.isNull(object)||this.isNull(property))return false;
        if(object.__proto__.hasOwnProperty(property)){return true};
        return object.__proto__.__proto__.hasOwnProperty(property);
    }
    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    generatePosition(min, max, size =20){
        return {x:this.getRandomNumber(min, max)*size,
                y:this.getRandomNumber(min, max)*size};
    }
}