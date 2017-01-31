import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/takeUntil';

let source:Observable<any> = Observable.timer(0, 1000)
    .takeUntil(Observable.timer(5000));

source.subscribe(
    (msg:number) => console.log(msg),
    (error) => console.log('onError: %s', error),
    () => console.log('onCompleted')
);