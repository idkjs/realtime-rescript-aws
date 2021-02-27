# realtime-rescript-react
Project template to start ReScript React with Snowpack


# Create AWS Graphql API

```sh
> amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: realtimerescriptaws
? Choose the default authorization type for the API API key
? Enter a description for the API key: realtimerescriptapi
? After how many days from now the API key should expire (1-365): 365
? Do you want to configure advanced settings for the GraphQL API No, I a
m done.
? Do you have an annotated GraphQL schema? No
? Choose a schema template: Single object with fields (e.g., “Todo” with
 ID, name, description)

The following types do not have '@auth' enabled. Consider using @auth with @model
         - Todo
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth


GraphQL schema compiled successfully.

Edit your schema at /Volumes/SSD/Github/realtime-rescript-aws/amplify/backend/api/realtimerescriptaws/schema.graphql or place .graphql files in a directory at /Volumes/SSD/Github/realtime-rescript-aws/amplify/backend/api/realtimerescriptaws/schema
? Do you want to edit the schema now? Yes
Please edit the file in your editor: /Volumes/SSD/Github/realtime-rescript-aws/amplify/backend/api/realtimerescriptaws/schema.graphql
Successfully added resource realtimerescriptaws locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

> amplify push
✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name       | Operation | Provider plugin   |
| -------- | ------------------- | --------- | ----------------- |
| Api      | realtimerescriptaws | Create    | awscloudformation |
? Are you sure you want to continue? (Y/n)
? Are you sure you want to continue? Yes

The following types do not have '@auth' enabled. Consider using @auth with @model
         - Message
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth


GraphQL schema compiled successfully.

Edit your schema at /Volumes/SSD/Github/realtime-rescript-aws/amplify/backend/api/realtimerescriptaws/schema.graphql or place .graphql files in a directory at /Volumes/SSD/Github/realtime-rescript-aws/amplify/backend/api/realtimerescriptaws/schema
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target javascript
? Enter the file name pattern of graphql queries, mutations and subscrip
tions src/graphql/**/*.js
? Do you want to generate/update all possible GraphQL operations - queri
es, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is
 deeply nested] 2
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS apirealtimerescriptaws                 AWS::CloudFormation::Stack Sat Feb 27 2021 15:29:22 GMT+0100 (Central European Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS apirealtimerescriptaws                 AWS::CloudFormation::Stack Sat Feb 27 2021 15:29:21 GMT+0100 (Central European Standard Time)
UPDATE_IN_PROGRESS amplify-realtimerescriptaws-dev-143309 AWS::CloudFormation::Stack Sat Feb 27 2021 15:29:17 GMT+0100 (Central European Standard Time) User Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-realtimerescriptaws-dev-143309-apirealtimerescriptaws-1OQETMH3IUT2Z AWS::CloudFormation::Stack Sat Feb 27 2021 15:29:22 GMT+0100 (Central European Standard Time) User Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPI AWS::AppSync::GraphQLApi Sat Feb 27 2021 15:29:26 GMT+0100 (Central European Standard Time)
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLSchema AWS::AppSync::GraphQLSchema Sat Feb 27 2021 15:29:32 GMT+0100 (Central European Standard Time) Resource creation Initiated
CREATE_COMPLETE    GraphQLAPIKey AWS::AppSync::ApiKey        Sat Feb 27 2021 15:29:32 GMT+0100 (Central European Standard Time)
CREATE_IN_PROGRESS GraphQLAPIKey AWS::AppSync::ApiKey        Sat Feb 27 2021 15:29:32 GMT+0100 (Central European Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS GraphQLAPIKey AWS::AppSync::ApiKey        Sat Feb 27 2021 15:29:31 GMT+0100 (Central European Standard Time)
CREATE_IN_PROGRESS GraphQLSchema AWS::AppSync::GraphQLSchema Sat Feb 27 2021 15:29:31 GMT+0100 (Central European Standard Time)
CREATE_COMPLETE    GraphQLAPI    AWS::AppSync::GraphQLApi    Sat Feb 27 2021 15:29:29 GMT+0100 (Central European Standard Time)
CREATE_IN_PROGRESS GraphQLAPI    AWS::AppSync::GraphQLApi    Sat Feb 27 2021 15:29:29 GMT+0100 (Central European Standard Time) Resource creation Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    MessageDataSource     AWS::AppSync::DataSource Sat Feb 27 2021 15:31:05 GMT+0100 (Central European Standard Time)
CREATE_IN_PROGRESS MessageDataSource     AWS::AppSync::DataSource Sat Feb 27 2021 15:31:05 GMT+0100 (Central European Standard Time) Resource creation Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    MessageTable          AWS::DynamoDB::Table   Sat Feb 27 2021 15:31:12 GMT+0100 (Central European Standard Time)
CREATE_COMPLETE    GetMessageResolver    AWS::AppSync::Resolver Sat Feb 27 2021 15:31:09 GMT+0100 (Central European Standard Time)
CREATE_COMPLETE    CreateMessageResolver AWS::AppSync::Resolver Sat Feb 27 2021 15:31:09 GMT+0100 (Central European Standard Time)
CREATE_IN_PROGRESS CreateMessageResolver AWS::AppSync::Resolver Sat Feb 27 2021 15:31:09 GMT+0100 (Central European Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS GetMessageResolver    AWS::AppSync::Resolver Sat Feb 27 2021 15:31:09 GMT+0100 (Central European Standard Time) Resource creation Initiated
CREATE_COMPLETE    ListMessageResolver   AWS::AppSync::Resolver Sat Feb 27 2021 15:31:09 GMT+0100 (Central European Standard Time)
CREATE_IN_PROGRESS ListMessageResolver   AWS::AppSync::Resolver Sat Feb 27 2021 15:31:09 GMT+0100 (Central European Standard Time) Resource creation Initiated
CREATE_COMPLETE    UpdateMessageResolver AWS::AppSync::Resolver Sat Feb 27 2021 15:31:09 GMT+0100 (Central European Standard Time)
CREATE_COMPLETE    DeleteMessageResolver AWS::AppSync::Resolver Sat Feb 27 2021 15:31:09 GMT+0100 (Central European Standard Time)
CREATE_IN_PROGRESS UpdateMessageResolver AWS::AppSync::Resolver Sat Feb 27 2021 15:31:09 GMT+0100 (Central European Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS DeleteMessageResolver AWS::AppSync::Resolver Sat Feb 27 2021 15:31:09 GMT+0100 (Central European Standard Time) Resource creation Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-realtimerescriptaws-dev-143309-apirealtimerescriptaws-1OQETMH3IUT2Z-Message-17X9S0JO6Y6VA AWS::CloudFormation::Stack Sat Feb 27 2021 15:31:15 GMT+0100 (Central European Standard Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Sat Feb 27 2021 15:31:26 GMT+0100 (Central European Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Sat Feb 27 2021 15:31:25 GMT+0100 (Central European Standard Time)
CREATE_COMPLETE    Message             AWS::CloudFormation::Stack Sat Feb 27 2021 15:31:23 GMT+0100 (Central European Standard Time)
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-realtimerescriptaws-dev-143309-apirealtimerescriptaws-1OQE-CustomResourcesjson-ZKCUHC2EPIRP AWS::CloudFormation::Stack Sat Feb 27 2021 15:31:26 GMT+0100 (Central European Standard Time) User Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-realtimerescriptaws-dev-143309-apirealtimerescriptaws-1OQE-CustomResourcesjson-ZKCUHC2EPIRP AWS::CloudFormation::Stack Sat Feb 27 2021 15:31:29 GMT+0100 (Central European Standard Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE CustomResourcesjson AWS::CloudFormation::Stack Sat Feb 27 2021 15:31:36 GMT+0100 (Central European Standard Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-realtimerescriptaws-dev-143309-apirealtimerescriptaws-1OQETMH3IUT2Z AWS::CloudFormation::Stack Sat Feb 27 2021 15:31:38 GMT+0100 (Central European Standard Time)
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE apirealtimerescriptaws AWS::CloudFormation::Stack Sat Feb 27 2021 15:32:00 GMT+0100 (Central European Standard Time)
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE                     amplify-realtimerescriptaws-dev-143309 AWS::CloudFormation::Stack Sat Feb 27 2021 15:32:03 GMT+0100 (Central European Standard Time)
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-realtimerescriptaws-dev-143309 AWS::CloudFormation::Stack Sat Feb 27 2021 15:32:03 GMT+0100 (Central European Standard Time)
⠴ Updating resources in the cloud. This may take a few minutes...⠋ Gener✔ Generated GraphQL operations successfully and saved at src/graphql
⠹ Updating resources in the cloud. This may take a few minutes...⠋ Uploa✔ All resources are updated in the cloud

GraphQL endpoint: https://24zrz4jroze6pjhfaqmwyllhky.appsync-api.eu-central-1.amazonaws.com/graphql
GraphQL API KEY: da2-mgxfi33egrck5bp6tefdh5x24i
```

[zenparsing/zen-observable](https://github.com/zenparsing/zen-observable)

# zen-observable

An implementation of Observables for JavaScript. Requires Promises or a Promise polyfill.

## Install

```sh
npm install zen-observable
```

## Usage

```js
import Observable from 'zen-observable';

Observable.of(1, 2, 3).subscribe(x => console.log(x));
```

## API

### new Observable(subscribe)

```js
let observable = new Observable(observer => {
  // Emit a single value after 1 second
  let timer = setTimeout(() => {
    observer.next('hello');
    observer.complete();
  }, 1000);

  // On unsubscription, cancel the timer
  return () => clearTimeout(timer);
});
```

Creates a new Observable object using the specified subscriber function.  The subscriber function is called whenever the `subscribe` method of the observable object is invoked.  The subscriber function is passed an *observer* object which has the following methods:

- `next(value)` Sends the next value in the sequence.
- `error(exception)` Terminates the sequence with an exception.
- `complete()` Terminates the sequence successfully.
- `closed` A boolean property whose value is `true` if the observer's subscription is closed.

The subscriber function can optionally return either a cleanup function or a subscription object.  If it returns a cleanup function, that function will be called when the subscription has closed.  If it returns a subscription object, then the subscription's `unsubscribe` method will be invoked when the subscription has closed.

### Observable.of(...items)

```js
// Logs 1, 2, 3
Observable.of(1, 2, 3).subscribe(x => {
  console.log(x);
});
```

Returns an observable which will emit each supplied argument.

### Observable.from(value)

```js
let list = [1, 2, 3];

// Iterate over an object
Observable.from(list).subscribe(x => {
  console.log(x);
});
```

```js
// Convert something 'observable' to an Observable instance
Observable.from(otherObservable).subscribe(x => {
  console.log(x);
});
```

Converts `value` to an Observable.

- If `value` is an implementation of Observable, then it is converted to an instance of Observable as defined by this library.
- Otherwise, it is converted to an Observable which synchronously iterates over `value`.

### observable.subscribe([observer])

```js
let subscription = observable.subscribe({
  next(x) { console.log(x) },
  error(err) { console.log(`Finished with error: ${ err }`) },
  complete() { console.log('Finished') }
});
```

Subscribes to the observable.  Observer objects may have any of the following methods:

- `next(value)` Receives the next value of the sequence.
- `error(exception)` Receives the terminating error of the sequence.
- `complete()` Called when the stream has completed successfully.

Returns a subscription object that can be used to cancel the stream.

### observable.subscribe(nextCallback[, errorCallback, completeCallback])

```js
let subscription = observable.subscribe(
  x => console.log(x),
  err => console.log(`Finished with error: ${ err }`),
  () => console.log('Finished')
);
```

Subscribes to the observable with callback functions. Returns a subscription object that can be used to cancel the stream.

### observable.forEach(callback)

```js
observable.forEach(x => {
  console.log(`Received value: ${ x }`);
}).then(() => {
  console.log('Finished successfully')
}).catch(err => {
  console.log(`Finished with error: ${ err }`);
})
```

Subscribes to the observable and returns a Promise for the completion value of the stream.  The `callback` argument is called once for each value in the stream.

### observable.filter(callback)

```js
Observable.of(1, 2, 3).filter(value => {
  return value > 2;
}).subscribe(value => {
  console.log(value);
});
// 3
```

Returns a new Observable that emits all values which pass the test implemented by the `callback` argument.

### observable.map(callback)

Returns a new Observable that emits the results of calling the `callback` argument for every value in the stream.

```js
Observable.of(1, 2, 3).map(value => {
  return value * 2;
}).subscribe(value => {
  console.log(value);
});
// 2
// 4
// 6
```

### observable.reduce(callback [,initialValue])

```js
Observable.of(0, 1, 2, 3, 4).reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}).subscribe(result => {
  console.log(result);
});
// 10
```

Returns a new Observable that applies a function against an accumulator and each value of the stream to reduce it to a single value.

### observable.concat(...sources)

```js
Observable.of(1, 2, 3).concat(
  Observable.of(4, 5, 6),
  Observable.of(7, 8, 9)
).subscribe(result => {
  console.log(result);
});
// 1, 2, 3, 4, 5, 6, 7, 8, 9
```

Merges the current observable with additional observables.
