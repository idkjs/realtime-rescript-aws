import Observable from 'zen-observable';

let otherObservable = new Observable(observer => {
  // Emit a single value after 1 second
  let timer = setTimeout(() => {
    observer.next('hello');
    observer.next('hello again');
    observer.complete();
  }, 1000);

  // On unsubscription, cancel the timer
  return () => clearTimeout(timer);
});

let useOtherObservable = Observable.from(otherObservable).subscribe(x => {
  console.log(x);
});

export default useOtherObservable
