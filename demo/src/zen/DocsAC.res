
let arr=[1, 2, 3]

// source ->Observable.subscribe(_,x => Js.log(x));
// let test = subscribe(source)


// @module @new
// external _make: ((ACSubscriptionObserver.t<'a>, unit) => unit) => ACSubscriptionObserver.t<'a> = "zen-observable"
// let arr:ACSubscriptionObserver.t<'data> = arr->Obj.magic
// // let arr:ACSubscriptionObserver.t<'data> = ACSubscriptionObserver.t(arr)
// let make = f => _make(f)

module Subscription = ACZenObservable.Subscription
type t<'data> = {
  subscribe: (
    ~onNext: 'data => unit,
    ~onError: Js.Json.t => unit=?,
    ~onComplete: unit => unit=?,
    unit,
  ) => Subscription.t,
}


@module @new
external _make: (t<'a>, unit) => unit => t<'a> = "zen-observable"
let make = f => _make(f)
// let arr:t<'data> = arr as 'data
