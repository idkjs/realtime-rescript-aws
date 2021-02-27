module Query = %graphql(`
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      message
      createdAt
      updatedAt
    }
  }
`)

let query = Query.query
