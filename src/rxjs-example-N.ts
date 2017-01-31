import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/range';

let behaviorSubject:BehaviorSubject<string | number> = new BehaviorSubject('init value');

behaviorSubject.subscribe(item => {
    console.log(item);
});

Observable.range(1, 10).subscribe(behaviorSubject);