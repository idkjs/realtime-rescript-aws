@unboxed
type rec any = Any('a): any
let foo = input => switch input {
  | "a" => Any(["a"])
  | "b" => Any(true)
  | _  => raise(Invalid_argument(input))
}
Js.log(foo("a"))
Js.log(foo("b"))
// Js.log(foo(1->Belt.Int.toString))
