import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';

let subject:Subject<string> = new Subject();
let stop:Subject<string> = new Subject();

subject.takeUntil(stop).subscribe(
    (msg:number) => console.log(msg),
    (error) => console.log('onError: %s', error),
    () => console.log('onCompleted')
);

subject.next('Hello');
subject.next('RxJS');
stop.next('any message');
subject.next('subscription stopped and it will be not emitted');