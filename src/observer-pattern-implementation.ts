interface IListener {
  update(msg: string): void;
}

interface IObserver {
  add(listener: IListener): void;
  remove(listener: IListener): void;
  notify(msg: string): void;
}

class Observer implements IObserver {
  private _listeners: IListener[] = [];

  public add(listener: IListener): void {
    this._listeners.push(listener);
  }

  public remove(listener: IListener): void {
    this._listeners.splice(this._listeners.indexOf(listener), 1);
  }

  public notify(msg: string): void {
    this._listeners.forEach((listener: IListener) => listener.update(msg));
  }
}

let listener1 = {
  update(msg: string) {
    console.log(`Listener1: ${msg}`);
  }
};

let listener2 = {
  update(msg: string) {
    console.log(`Listener2: ${msg}`);
  }
};

let listener3 = {
  update(msg: string) {
    console.log(`Listener3: ${msg}`);
  }
};

let listener4 = {
  update(msg: string) {
    console.log(`Listener4: ${msg}`);
  }
};

let observer = new Observer();

observer.add(listener1);
observer.add(listener2);
observer.add(listener3);
observer.remove(listener1);
observer.add(listener4);

observer.notify("RxJS + TS => Cool");
