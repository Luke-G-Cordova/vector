
export default class Vector {
    constructor(obj){
        this.x = obj.x;
        this.y = obj.y;
        this.magnitude = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    static createNew(x, y){
        return new Vector({x: x, y: y});
    }
    add(vector){
        this.x += vector.x;
        this.y += vector.y;
    }
    sub(vector){
        this.x -= vector.x;
        this.y -= vector.y;
    }
    mult(scalor){
        this.x *= scalor;
        this.y *= scalor;
    }
    div(scalor){
        this.x /= scalor;
        this.y /= scalor;
    }
    normalize(){
        this.x /= this.magnitude;
        this.y /= this.magnitude;
        this.magnitude /= this.magnitude;
    }
}