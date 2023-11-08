class Vector {
    coordinates;

    constructor(coordinates) {
        this.coordinates = coordinates;
    }

    add(n) {
        let result = [];
        if (this.coordinates.toString().length === n.coordinates.toString().length) {
            for (let i = 0; i < this.coordinates.length; i++) {
                result.push(this.coordinates[i] + n.coordinates[i]);
            }
        return new Vector(result);
        }
        else {
            throw new Error();
        }
    }

    substract(n) {
        let result = [];
        if (this.coordinates.toString().length === n.coordinates.toString().length) {
            for (let i = 0; i < this.coordinates.length; i++) {
                result.push(this.coordinates[i] - n.coordinates[i]);
            }
            return new Vector(result);
        } else {
            throw new Error();
        }
    }

    dot(n) {
        let result = 0;
        if (this.coordinates.toString().length === n.coordinates.toString().length) {
            for (let i = 0; i < this.coordinates.length; i++) {
                result += this.coordinates[i] * n.coordinates[i];
            }
            return result;
        } else {
            throw new Error();
        }
    }

    norm() {
        let result = 0;
        for (let i = 0; i < this.coordinates.length; i++) {
            result += Math.pow(this.coordinates[i], 2);
        }
        return Math.pow(result, 0.5);
    }

    equals(n) {
        if (this.coordinates.toString().length === n.coordinates.toString().length) {
            for (let i = 0; i < this.coordinates.length; i++) {
               if (this.coordinates[i]!==n.coordinates[i]){
                   return false;
               }

            }
        }
        else {
            return false;
        }
        return true;
    }
    toString(){
       return `(${this.coordinates.join(',')})`;
    }
}

