
open ZenObservable
let arr=[1, 2, 3]
let source = arr|>of_array|>of_observable
// let obs =source|>forEach(x => Js.log2("observing:", x))
// source ->Observable.subscribe(_,x => Js.log(x));
// let test = subscribe(source)

Js.log2("observing:", source)
// @module @new
// external _make: ((ACSubscriptionObserver.t<'a>, unit) => unit) => t<'a> = "zen-observable"
// let source = ACSubscriptionObserver.castToJs(arr)
// let make = f => _make(f)

