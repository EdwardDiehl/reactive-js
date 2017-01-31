import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of'

let subject:Observable<number> = Observable.of(1, 2, 3, 4, 5).mergeMap((msg:number):Observable<number> => {
    return Observable.create((s) => {
        s.next(msg * 10);
        s.complete()
    });
});

subject.subscribe(
    (msg:number) => console.log(msg),
    (error) => console.log('onError: %s', error),
    () => console.log('onCompleted')
);