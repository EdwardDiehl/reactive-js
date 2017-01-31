interface IIterator {
    next():any;
    hasNext():boolean;
}

class Iterator implements IIterator {
    private _cursor:number = 0;
    private _array:any[];
    private _divisor:number;

    constructor(array:any[], divisor:number = 1) {
        this._array = array;
        this._divisor = divisor;
    }

    public next():any {
        for (let i = this._cursor; i < this._array.length; i++) {
            let value = this._array[i];
            if (value % this._divisor === 0) {
                this._cursor = i < this._array.length ? i + 1 : this._cursor;
                return value;
            }
        }
    }

    public hasNext():boolean {
        for (let i = this._cursor; i < this._array.length; i++) {
            if (this._array[i + 1] % this._divisor === 0) {
                return true;
            }
        }

        return false;
    }
}

let consumer = new Iterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

console.log(consumer.next(), consumer.hasNext());
console.log(consumer.next(), consumer.hasNext());
console.log(consumer.next(), consumer.hasNext());
console.log(consumer.next(), consumer.hasNext());
console.log(consumer.next(), consumer.hasNext());
console.log(consumer.next(), consumer.hasNext());