module OnCreateMessage =%graphql(`
  subscription OnCreateMessage {
    onCreateMessage {
      id
      message
      createdAt
      updatedAt
    }
  }
`)

include OnCreateMessage
