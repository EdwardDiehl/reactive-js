import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/range";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

let sequence:Observable<number> = Observable.range(1, 5)
    .map((item:number) => item ** 2)
    .filter((item:number) => item >= 10);

sequence.subscribe(
    (item:number) => console.log(item),
    (error) => console.log("onError: %s", error),
    () => console.log("onCompleted")
);
