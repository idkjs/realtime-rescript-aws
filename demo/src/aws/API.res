type t
@bs.module("@aws-amplify/api") external api: t = "default"
@bs.send external configureApi: (t, AwsExports.t) => unit = "configure"
// let configure = config => configure(api, config);
type pubsub
@bs.module("@aws-amplify/pubsub/lib-esm/index")
external pubsub: pubsub = "default"
@bs.send
external configurePubSub: (pubsub, AwsExports.t) => unit = "configure"
let configure = config => {
  configureApi(api, config)
  configurePubSub(pubsub, config)
}
type observerLike<'event> = {
  next: 'event => unit,
  error: 'event => unit,
  complete: unit => unit,
};
@bs.val
external jsonStringify: ('a, Js.Nullable.t<unit>, int) => string =
  "JSON.stringify";
/* this is unused because I haven't figured out how to use it yet, but a cleaner version of this code will use it. */
// let listener: observerLike<'event> = {
//   next: event => {
//     Js.log2("Subscription: ", event)
//     Js.log2("EVENT: ", jsonStringify(event, Js.Nullable.null, 2))
//   },
//   error: errorValue => Js.log(errorValue),
//   complete: _ => Js.log("COMPLETE"),
// }

/* don't have to bind to this? it happens on the aws-amplify side i think.
   The `API.graphql` function returns a `promise` for queries and mutations and an `Observable` for subscriptions. See: https://github.com/aws-amplify/amplify-js/blob/master/packages/api/src/API.ts#L350

   [@bs.module "@aws-amplify/pubsub"] external pubsub: t = "default"; */

@bs.send
external graphql: (t, Types.graphqlOperation) => Js.Promise.t<observerLike<Types.executionResult>> = "graphql"

// let mutate: Types.operation = graphqlOperation => graphql(api, graphqlOperation)
let mutate = graphqlOperation => graphql(api, graphqlOperation)
/* our api subscription query on the amplify/api side which returns and observable
   see:https://github.com/aws-amplify/amplify-js/blob/867412030de57fd74078b609252de6f7f81ad331/packages/pubsub/src/PubSub.ts#L149
 */

@bs.send
external _subscribe: (
  t,
  Types.graphqlOperation,
) => Wonka_observable.observableT<Types.observableLike<'event>> = "graphql"
let subscribe = graphqlOperation => _subscribe(api, graphqlOperation)
let subscribeToObservable = graphqlOperation =>
  _subscribe(api, graphqlOperation) |> Wonka.fromObservable

let extractMessageFrom = event => {
  let event = event->Obj.magic
  /* get the message value on event and post to ui */
  let message = event["value"]["data"]["onCreateMessage"]["message"]
  message
}

let listener: observerLike<'event> = {
  next: event => {
    Js.log2("Subscription: ", event)
    Js.log2("EVENT: ", extractMessageFrom(event))
  },
  error: errorValue => Js.log(errorValue),
  complete: _ => Js.log("COMPLETE"),
}
/* setting up like this returns the message on which we can call `setMessage()` */
let subscribeToMessage = graphqlOperation =>
  _subscribe(api, graphqlOperation)
  |> Wonka.fromObservable
  |> Wonka.map((. event) => extractMessageFrom(event));

let subscribeToMessageOps = graphqlOperation =>
  _subscribe(api, graphqlOperation)
  |> Wonka.fromObservable
  |> Wonka.map((. listener) => listener)
// let subscribeToMessage2 = graphqlOperation =>
//   _subscribe(api, graphqlOperation) |> Wonka.fromObservable
