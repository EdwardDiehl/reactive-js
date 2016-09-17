import {Observable} from 'rxjs/Observable';
import {AsyncSubject} from 'rxjs/AsyncSubject';
import 'rxjs/add/observable/range';

function getValue():Observable<number> {
    let asyncSubject:AsyncSubject<number>;

    return Observable.create(observer => {
        if (!asyncSubject) {
            let delayRange = Observable.range(1, 7);
            asyncSubject = new AsyncSubject();
            delayRange.subscribe(asyncSubject);
        }

        return asyncSubject.subscribe(observer);
    })
}

let cachedValue = getValue();

console.time('first result');
cachedValue.subscribe(item => {
    console.timeEnd('first result');
    console.log(item);
});

console.time('cached result');
cachedValue.subscribe(item => {
    console.timeEnd('cached result');
    console.log(item);
});