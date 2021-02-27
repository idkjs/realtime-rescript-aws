

import * as Wonka from "wonka/src/Wonka.bs.js";
import Api from "@aws-amplify/api";
import Index from "@aws-amplify/pubsub/lib-esm/index";

function configure(config) {
  Api.configure(config);
  Index.configure(config);
  
}

function listener_next($$event) {
  console.log("Subscription: ", JSON.stringify($$event.value.data, null, 2));
  console.log("EVENT: ", JSON.stringify($$event, null, 2));
  var message = $$event.value.data.message;
  console.log("MESSAGE: ", JSON.stringify(message, null, 2));
  
}

function listener_error(errorValue) {
  console.log(errorValue);
  
}

function listener_complete(param) {
  console.log("COMPLETE");
  
}

var listener = {
  next: listener_next,
  error: listener_error,
  complete: listener_complete
};

function mutate(graphqlOperation) {
  return Api.graphql(graphqlOperation);
}

function subscribe(graphqlOperation) {
  return Api.graphql(graphqlOperation);
}

function subscribeToObservable(graphqlOperation) {
  return Wonka.fromObservable(Api.graphql(graphqlOperation));
}

function extractMessageFrom($$event) {
  return $$event.value.data.onCreateMessage.message;
}

function subscribeToMessage(graphqlOperation) {
  return Wonka.map(extractMessageFrom)(Wonka.fromObservable(Api.graphql(graphqlOperation)));
}

function subscribeToMessage2(graphqlOperation) {
  return Wonka.fromObservable(Api.graphql(graphqlOperation));
}

export {
  configure ,
  listener ,
  mutate ,
  subscribe ,
  subscribeToObservable ,
  extractMessageFrom ,
  subscribeToMessage ,
  subscribeToMessage2 ,
  
}
/* Wonka Not a pure module */
