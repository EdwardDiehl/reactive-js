interface IListener {
    update(msg:string):void;
}

interface IObserver {
    add(listener:IListener):void;
    remove(listener:IListener):void;
    notify(msg:string):void;
}

class Observer implements IObserver {
    private _listeners:IListener[] = [];

    public add(listener:IListener):void {
        this._listeners.push(listener)
    }

    public remove(listener:IListener):void {
        this._listeners.splice(this._listeners.indexOf(listener), 1)
    }

    public notify(msg:string):void {
        this._listeners.forEach((listener: IListener) => listener.update(msg));
    }
}

let listener_1 = {
    update(msg:string){
        console.log(`Listener_1: ${msg}`);
    }
};

let listener_2 = {
    update(msg:string){
        console.log(`Listener_2: ${msg}`);
    }
};

let listener_3 = {
    update(msg:string){
        console.log(`Listener_3: ${msg}`);
    }
};

let listener_4 = {
    update(msg:string){
        console.log(`Listener_4: ${msg}`);
    }
};

let observer = new Observer();

observer.add(listener_1);
observer.add(listener_2);
observer.add(listener_3);
observer.remove(listener_1);
observer.add(listener_4);

observer.notify('RxJS + TS => Cool');