


var Raw = {};

function parse(value) {
  var value$1 = value.listMessages;
  var tmp;
  if (value$1 == null) {
    tmp = undefined;
  } else {
    var value$2 = value$1.items;
    var value$3 = value$1.nextToken;
    tmp = {
      items: !(value$2 == null) ? value$2.map(function (value) {
              if (value == null) {
                return ;
              }
              var value$1 = value.createdAt;
              return {
                      id: value.id,
                      message: value.message,
                      createdAt: !(value$1 == null) ? value$1 : undefined
                    };
            }) : undefined,
      nextToken: !(value$3 == null) ? value$3 : undefined
    };
  }
  return {
          listMessages: tmp
        };
}

function serialize(value) {
  var value$1 = value.listMessages;
  var listMessages;
  if (value$1 !== undefined) {
    var value$2 = value$1.nextToken;
    var nextToken = value$2 !== undefined ? value$2 : null;
    var value$3 = value$1.items;
    var items = value$3 !== undefined ? value$3.map(function (value) {
            if (value === undefined) {
              return null;
            }
            var value$1 = value.createdAt;
            var createdAt = value$1 !== undefined ? value$1 : null;
            var value$2 = value.message;
            var value$3 = value.id;
            return {
                    id: value$3,
                    message: value$2,
                    createdAt: createdAt
                  };
          }) : null;
    listMessages = {
      items: items,
      nextToken: nextToken
    };
  } else {
    listMessages = null;
  }
  return {
          listMessages: listMessages
        };
}

function serializeInputObjectModelStringFilterInput(inp) {
  var a = inp.ne;
  var a$1 = inp.eq;
  var a$2 = inp.le;
  var a$3 = inp.lt;
  var a$4 = inp.ge;
  var a$5 = inp.gt;
  var a$6 = inp.contains;
  var a$7 = inp.notContains;
  var a$8 = inp.between;
  var a$9 = inp.beginsWith;
  return {
          ne: a !== undefined ? a : undefined,
          eq: a$1 !== undefined ? a$1 : undefined,
          le: a$2 !== undefined ? a$2 : undefined,
          lt: a$3 !== undefined ? a$3 : undefined,
          ge: a$4 !== undefined ? a$4 : undefined,
          gt: a$5 !== undefined ? a$5 : undefined,
          contains: a$6 !== undefined ? a$6 : undefined,
          notContains: a$7 !== undefined ? a$7 : undefined,
          between: a$8 !== undefined ? a$8.map(function (b) {
                  if (b !== undefined) {
                    return b;
                  }
                  
                }) : undefined,
          beginsWith: a$9 !== undefined ? a$9 : undefined
        };
}

function serializeInputObjectModelIDFilterInput(inp) {
  var a = inp.ne;
  var a$1 = inp.eq;
  var a$2 = inp.le;
  var a$3 = inp.lt;
  var a$4 = inp.ge;
  var a$5 = inp.gt;
  var a$6 = inp.contains;
  var a$7 = inp.notContains;
  var a$8 = inp.between;
  var a$9 = inp.beginsWith;
  return {
          ne: a !== undefined ? a : undefined,
          eq: a$1 !== undefined ? a$1 : undefined,
          le: a$2 !== undefined ? a$2 : undefined,
          lt: a$3 !== undefined ? a$3 : undefined,
          ge: a$4 !== undefined ? a$4 : undefined,
          gt: a$5 !== undefined ? a$5 : undefined,
          contains: a$6 !== undefined ? a$6 : undefined,
          notContains: a$7 !== undefined ? a$7 : undefined,
          between: a$8 !== undefined ? a$8.map(function (b) {
                  if (b !== undefined) {
                    return b;
                  }
                  
                }) : undefined,
          beginsWith: a$9 !== undefined ? a$9 : undefined
        };
}

function serializeInputObjectModelMessageFilterInput(inp) {
  var a = inp.id;
  var a$1 = inp.message;
  var a$2 = inp.createdAt;
  var a$3 = inp.and;
  var a$4 = inp.or;
  var a$5 = inp.not;
  return {
          id: a !== undefined ? serializeInputObjectModelIDFilterInput(a) : undefined,
          message: a$1 !== undefined ? serializeInputObjectModelStringFilterInput(a$1) : undefined,
          createdAt: a$2 !== undefined ? serializeInputObjectModelStringFilterInput(a$2) : undefined,
          and: a$3 !== undefined ? a$3.map(function (b) {
                  if (b !== undefined) {
                    return serializeInputObjectModelMessageFilterInput(b);
                  }
                  
                }) : undefined,
          or: a$4 !== undefined ? a$4.map(function (b) {
                  if (b !== undefined) {
                    return serializeInputObjectModelMessageFilterInput(b);
                  }
                  
                }) : undefined,
          not: a$5 !== undefined ? serializeInputObjectModelMessageFilterInput(a$5) : undefined
        };
}

function serializeVariables(inp) {
  var a = inp.filter;
  var a$1 = inp.limit;
  var a$2 = inp.nextToken;
  return {
          filter: a !== undefined ? serializeInputObjectModelMessageFilterInput(a) : undefined,
          limit: a$1 !== undefined ? a$1 : undefined,
          nextToken: a$2 !== undefined ? a$2 : undefined
        };
}

function makeVariables(filter, limit, nextToken, param) {
  return {
          filter: filter,
          limit: limit,
          nextToken: nextToken
        };
}

function makeInputObjectModelMessageFilterInput(id, message, createdAt, and_, or_, not, param) {
  return {
          id: id,
          message: message,
          createdAt: createdAt,
          and: and_,
          or: or_,
          not: not
        };
}

function makeInputObjectModelIDFilterInput(ne, eq, le, lt, ge, gt, contains, notContains, between, beginsWith, param) {
  return {
          ne: ne,
          eq: eq,
          le: le,
          lt: lt,
          ge: ge,
          gt: gt,
          contains: contains,
          notContains: notContains,
          between: between,
          beginsWith: beginsWith
        };
}

function makeInputObjectModelStringFilterInput(ne, eq, le, lt, ge, gt, contains, notContains, between, beginsWith, param) {
  return {
          ne: ne,
          eq: eq,
          le: le,
          lt: lt,
          ge: ge,
          gt: gt,
          contains: contains,
          notContains: notContains,
          between: between,
          beginsWith: beginsWith
        };
}

function makeDefaultVariables(param) {
  return {
          filter: undefined,
          limit: undefined,
          nextToken: undefined
        };
}

var ListMessages = {
  Raw: Raw,
  query: "query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String)  {\nlistMessages(filter: $filter, limit: $limit, nextToken: $nextToken)  {\nitems  {\nid  \nmessage  \ncreatedAt  \n}\n\nnextToken  \n}\n\n}\n",
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  serializeInputObjectModelMessageFilterInput: serializeInputObjectModelMessageFilterInput,
  serializeInputObjectModelIDFilterInput: serializeInputObjectModelIDFilterInput,
  serializeInputObjectModelStringFilterInput: serializeInputObjectModelStringFilterInput,
  makeVariables: makeVariables,
  makeInputObjectModelMessageFilterInput: makeInputObjectModelMessageFilterInput,
  makeInputObjectModelIDFilterInput: makeInputObjectModelIDFilterInput,
  makeInputObjectModelStringFilterInput: makeInputObjectModelStringFilterInput,
  makeDefaultVariables: makeDefaultVariables
};

var Raw$1 = {};

function parse$1(value) {
  var value$1 = value.createMessage;
  var tmp;
  if (value$1 == null) {
    tmp = undefined;
  } else {
    var value$2 = value$1.createdAt;
    tmp = {
      id: value$1.id,
      message: value$1.message,
      createdAt: !(value$2 == null) ? value$2 : undefined
    };
  }
  return {
          createMessage: tmp
        };
}

function serialize$1(value) {
  var value$1 = value.createMessage;
  var createMessage;
  if (value$1 !== undefined) {
    var value$2 = value$1.createdAt;
    var createdAt = value$2 !== undefined ? value$2 : null;
    var value$3 = value$1.message;
    var value$4 = value$1.id;
    createMessage = {
      id: value$4,
      message: value$3,
      createdAt: createdAt
    };
  } else {
    createMessage = null;
  }
  return {
          createMessage: createMessage
        };
}

function serializeInputObjectCreateMessageInput(inp) {
  var a = inp.id;
  var a$1 = inp.createdAt;
  return {
          id: a !== undefined ? a : undefined,
          message: inp.message,
          createdAt: a$1 !== undefined ? a$1 : undefined
        };
}

function serializeVariables$1(inp) {
  return {
          input: serializeInputObjectCreateMessageInput(inp.input)
        };
}

function makeVariables$1(input, param) {
  return {
          input: input
        };
}

function makeInputObjectCreateMessageInput(id, message, createdAt, param) {
  return {
          id: id,
          message: message,
          createdAt: createdAt
        };
}

var CreateMessage = {
  Raw: Raw$1,
  query: "mutation CreateMessage($input: CreateMessageInput!)  {\ncreateMessage(input: $input)  {\nid  \nmessage  \ncreatedAt  \n}\n\n}\n",
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  serializeInputObjectCreateMessageInput: serializeInputObjectCreateMessageInput,
  makeVariables: makeVariables$1,
  makeInputObjectCreateMessageInput: makeInputObjectCreateMessageInput
};

var Raw$2 = {};

function parse$2(value) {
  var value$1 = value.onCreateMessage;
  return {
          onCreateMessage: !(value$1 == null) ? ({
                __typename: value$1.__typename,
                message: value$1.message
              }) : undefined
        };
}

function serialize$2(value) {
  var value$1 = value.onCreateMessage;
  var onCreateMessage;
  if (value$1 !== undefined) {
    var value$2 = value$1.message;
    var value$3 = value$1.__typename;
    onCreateMessage = {
      __typename: value$3,
      message: value$2
    };
  } else {
    onCreateMessage = null;
  }
  return {
          onCreateMessage: onCreateMessage
        };
}

function serializeVariables$2(param) {
  
}

function makeVariables$2(param) {
  
}

function makeDefaultVariables$1(param) {
  
}

var OnCreateMessage = {
  Raw: Raw$2,
  query: "subscription onCreateMessage  {\nonCreateMessage  {\n__typename  \nmessage  \n}\n\n}\n",
  parse: parse$2,
  serialize: serialize$2,
  serializeVariables: serializeVariables$2,
  makeVariables: makeVariables$2,
  makeDefaultVariables: makeDefaultVariables$1
};

export {
  ListMessages ,
  CreateMessage ,
  OnCreateMessage ,
  
}
/* No side effect */
