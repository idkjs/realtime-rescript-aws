module CreateMessage = %graphql(`
      mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      message
      createdAt
      updatedAt
    }
  }
`)

include CreateMessage
