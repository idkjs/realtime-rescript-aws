let \">>=" = Belt.Option.flatMap
// http://jobjo.github.io/2019/04/24/ocaml-has-some-new-shiny-syntax.html
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
