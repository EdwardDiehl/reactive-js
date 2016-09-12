import {Subject} from 'rxjs/Subject';

let subject:Subject<string> = new Subject();

subject.subscribe((msg:string) => console.log(msg));

subject.next('Hello');

setTimeout(() => {
    subject.next('Hello after 3000ms');
}, 3000);