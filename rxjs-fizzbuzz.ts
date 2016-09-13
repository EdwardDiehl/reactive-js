import {Observable} from  "rxjs/Observable";
import "rxjs/add/observable/range";
import "rxjs/add/operator/delay"
import "rxjs/add/operator/repeat"
import "rxjs/add/operator/map"

let sequence:Observable<void> = Observable.range(1, 100)
    .delay(1000)
    .repeat()
    .map((item: number) => {
        let message:string = '';
        
        if (item % 3 === 0) message = 'Fizz';
        if (item % 5 === 0) message += 'Buzz';
        
        console.log(message || item);
    });

sequence.subscribe((item) => item);