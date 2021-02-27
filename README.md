# snowpack-rescript-react
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
