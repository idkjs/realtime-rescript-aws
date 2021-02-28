// open Utils
%%raw(`import './App.css';`)
%%raw(`require('bootstrap/dist/css/bootstrap.min.css')`)
Amplify.configure(AwsExports.config)
API.configure(AwsExports.config)
@module("./logo.svg") external logo: string = "default"
let getInputValue = (e): string => ReactEvent.Form.target(e)["value"]
@react.component
let make = () => {
  let (message, setMessage) = React.useState(() => None)
  let (value, setValue) = React.useState(() => "")

  let handleSubmit = event => {
    /* create a message using a timestamp so we dont have to keep putting in a message to test */
    let time = Js.Date.now()
    let value = "RE: " ++ time->Js.Date.fromFloat->Js.Date.toLocaleString
    setValue(_ => value)
    let _ = ReactEvent.Form.preventDefault(event)
    let _ = ReactEvent.Form.stopPropagation(event)
    let input: CreateMessage.t_variables_CreateMessageInput = {
      id: None,
      message: value,
      createdAt: None,
    }
    let variables: CreateMessage.t_variables = CreateMessage.makeVariables(~input, ())
    let variables = CreateMessage.serializeVariables(variables)

    let graphqlOperation: Types.graphqlOperation = {
      query: CreateMessage.query,
      variables: Some(variables->CreateMessage.variablesToJson),
    }
    API.mutate(graphqlOperation) |> Js.Promise.then_(response =>
      Js.log2("reason_broadcaster_mutation", response) |> Js.Promise.resolve
    )
  }
  let variables = OnCreateMessage.serializeVariables(OnCreateMessage.makeDefaultVariables())
  let graphqlOperation: Types.graphqlOperation = {
    query: OnCreateMessage.query,
    variables: Some(variables->OnCreateMessage.variablesToJson),
  }

  React.useEffect(() => {
    // let variables: OnCreateMessage.t_variables = OnCreateMessage.makeDefaultVariables()
    // let variables = OnCreateMessage.serializeVariables(OnCreateMessage.makeDefaultVariables())
    // let graphqlOperation: Types.graphqlOperation = {
    //   query: OnCreateMessage.query,
    //   variables: Some(variables->OnCreateMessage.variablesToJson),
    // }

    // let subsOps = ops |> Wonka.subscribe((. message) => {
    //       setMessage(_ => Some(message))
    //       Js.log2("subscription_event", message)
    //     })|>ignore
    let messageObserver: Wonka_types.sinkT<string> => unit = API.subscribeToMessage(
      graphqlOperation,
    )
    let subscription = messageObserver |> Wonka.subscribe((. message) => {
      setMessage(_ => Some(message))
      Js.log2("subscription_event", message)
    })
    Some(() => subscription.unsubscribe())
  })
  let handleChange = e => {
    let value = e |> getInputValue
    setValue(_ => value)
  }
  <div className="App">
    <header className="App-header">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        // <div className="jumbotron jumbotron-fluid p-0">/
        <h2 className="center"> {"Reason Broadcaster"->React.string} </h2>
        {switch message {
        | Some(message) =>
          <div className="container">
            <div className="card bg-success">
              <h2 className="center"> {"Reason WSS Sub Response"->React.string} </h2>
              <h3 className="card-text text-white p-2"> {message->React.string} </h3>
            </div>
          </div>
        | None => React.null
        }}
      </div>
      <br />
      <form onSubmit={e => handleSubmit(e) |> ignore}>
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            type_="text"
            value
            onChange={e => handleChange(e)}
          />
          <input id="button" type_="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
      <br />
    </header>
  </div>
}
