import {Observable} from  "rxjs/Observable";
import "rxjs/add/observable/range";
import "rxjs/add/observable/zip";
import "rxjs/add/operator/delay"
import "rxjs/add/operator/repeat"
import "rxjs/add/operator/map"

let sequence:Observable<number> = Observable.range(1, 100)
    .delay(1000)
    .repeat();

let sequenceFizz:Observable<string | number> = sequence.map(item => (item % 3 === 0) ? 'Fizz' : item);
let sequenceBuzz:Observable<string | number> = sequence.map(item => (item % 5 === 0) ? 'Buzz' : item);

let sequenceFizzBuzz:Observable<string | number> = Observable.zip(sequenceFizz, sequenceBuzz).map((item:Array<any>) => {
    let message:number | string = '';
    let number:number | string;

    // item is something like [79, 'Buzz']
    if (item[1] === 'Buzz') {
        message = item.splice(1, 1)[0];
    }

    // item is something like ['Fizz', 79]
    if (item[0] === 'Fizz') {
        message = item.splice(0, 1)[0] + message;
    }

    number = item[0];

    return (message || number);
});

sequenceFizzBuzz.subscribe((item) => console.log(item));