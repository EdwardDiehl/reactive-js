import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

let sequence:Observable<string> = Observable.from(['Hello', 'RxJS', ')))']);
sequence.subscribe(str => console.log(str));