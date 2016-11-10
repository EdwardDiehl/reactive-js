// https://xgrommx.github.io/rx-book/content/observable/observable_methods/forkjoin.html
// https://www.learnrxjs.io/operators/combination/forkjoin.html

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';

let sequenceOne:Observable<string> = Observable.from(['a', 'b', 'c', 'd', 'e']);
let sequenceTwo:Observable<number> = Observable.from([1, 2, 3]);
let sequenceThree:Observable<any> = Observable.of({ foo: 'bar' });

sequenceOne.subscribe(
    (msg:any) => console.log(msg),
    (error) => console.log('onError: %s', error),
    () => console.log('onCompleted')
);

sequenceTwo.subscribe(
    (msg:any) => console.log(msg),
    (error) => console.log('onError: %s', error),
    () => console.log('onCompleted')
);

sequenceThree.subscribe(
    (msg:any) => console.log(msg),
    (error) => console.log('onError: %s', error),
    () => console.log('onCompleted')
);

let sequence = Observable.forkJoin(sequenceOne, sequenceTwo, sequenceThree);

sequence.subscribe(
    (msg:any) => console.log(msg),
    (error) => console.log('onError: %s', error),
    () => console.log('onCompleted')
);