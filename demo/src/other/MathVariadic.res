@scope("Math") @val @variadic
external max: array<'a> => 'a = "max"
@scope("Math") @val
external maxNoVariadic: array<'a> => 'a = "max"

@scope("Math") @val external random: unit => float = "random"
let howMany = Js.Math.maxMany_int([1, 2])
let howMany2 = Js.Math.maxMany_int([1, 2, 3, 4])
Js.log2("get max of 2 ints in array", max([1, 2]))
Js.log2("get maxNoVariadic of 2 ints in array", maxNoVariadic([1, 2])) /** Nan*/
Js.log2("get max of 4 ints in array", max([1, 2, 3, 4]))
Js.log2("howMany ints", howMany)
Js.log2("howMany2 ints", howMany2)
