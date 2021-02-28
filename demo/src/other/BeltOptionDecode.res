let \">>=" = Belt.Option.flatMap

let decode = json => {
  open Belt.Option
  open Js.Json
  \">>="(
    \">>="(
      \">>="(
        \">>="(
          \">>="(
            \">>="(decodeObject(json), Js.Dict.get(_, "data")),
            decodeArray,
          ),
          Belt.Array.get(_, 0),
        ),
        decodeObject,
      ),
      Js.Dict.get(_, "title"),
    ),
    decodeString,
  )->getWithDefault("Offline")
}