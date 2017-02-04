import {Subject} from "rxjs/Subject";

import "rxjs/add/operator/takeUntil";

let subject:Subject<string | number> = new Subject();
let stop:Subject<any> = new Subject();

subject.takeUntil(stop).subscribe(
    (msg:string | number) => console.log(msg),
    (error) => console.log("onError: %s", error),
    () => console.log("onCompleted")
);

subject.next("Hello");
subject.next("RxJS");
subject.next(37);
stop.next("any message");
subject.next("subscription stopped and it will be not emitted");