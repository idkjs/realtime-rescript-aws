import Observable from 'zen-observable';

Observable.of(1, 2, 3,4,5).subscribe(x => console.log(x));

let otherObservable = new Observable(observer => {
  // Emit a single value after 1 second
  let timer = setTimeout(() => {
    observer.next('hello');
    observer.complete();
  }, 1000);

  // On unsubscription, cancel the timer
  return () => clearTimeout(timer);
});



Observable.of(1, 2, 3).subscribe(x => {
  console.log(x);
});

let list = [1, 2, 3, 4];

// Iterate over an object
Observable.from(list).subscribe(x => {
  console.log(x);
});

Observable.from(otherObservable).subscribe(x => {
  console.log(x);
});
const useOtherObservable = Observable.from(otherObservable).subscribe(x => {
  console.log(x);
});

export default useOtherObservable
