export class Util{
    isNull(element){
            return element != null ? false : true;
    }
    isArrayEmpty(element = []){
        return element.length > 0 ? true : false;
    }
    hasOwnProperty1(object = null, property = null){
        if(this.isNull(object)||this.isNull(property))return false;
        if(object.__proto__.hasOwnProperty(property)){};
        if(object.__proto__.__proto__.hasOwnProperty(property)){return true};
        return object.__proto__.__proto__.__proto__.hasOwnProperty(property);
    }

    hasOwnProperty(object = null, property = null){
       return this.findMethod(object, property);
    }
    
    findMethod(object, methodName){
        if(object.hasOwnProperty(methodName))return true;
        if(object.__proto__)
            return this.findMethod(object.__proto__, methodName);
        return false
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    generatePosition(min, max, size =20){
        return {x:this.getRandomNumber(min, max)*size,
                y:this.getRandomNumber(min, max)*size};
    }
}