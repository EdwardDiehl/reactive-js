import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

let sequence:Observable<any> = Observable.create((observer:Observer<string>) => {
    observer.next('Hello');
    observer.next('RxJS');
    observer.complete();
});

sequence.subscribe((item:string) => console.log(item));