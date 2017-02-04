import {Observable} from  "rxjs/Observable";
import "rxjs/add/observable/range";
import "rxjs/add/observable/zip";
import "rxjs/add/operator/delay"
import "rxjs/add/operator/repeat"
import "rxjs/add/operator/map"

const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";

let sequence:Observable<number> = Observable.range(1, 100)
    .delay(1000)
    .repeat();

let sequenceFizz:Observable<string | number> = sequence.map(item => (item % 3 === 0) ? fizz : item);
let sequenceBuzz:Observable<string | number> = sequence.map(item => (item % 5 === 0) ? buzz : item);

let sequenceFizzBuzz:Observable<string | number> = Observable.zip(sequenceFizz, sequenceBuzz)
    .map((item:Array<any>) => {
        // item is something like [79, "Buzz"] or ["Fizz", 79] or ["Fizz", "Buzz"]
        if (item[0] === fizz && item[1] !== buzz) {
            return fizz;
        }

        if (item[0] !== fizz && item[1] === buzz) {
            return buzz;
        }

        if (item[0] === fizz && item[1] === buzz) {
            return fizzBuzz;
        }

        return item[0];
    });

sequenceFizzBuzz.subscribe((item) => console.log(item));