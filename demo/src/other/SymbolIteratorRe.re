/** Compatible with OCaml standard library */
module type Iter = {
  type t('a);
  let iter: ('a => unit, t('a)) => unit;
};

module JsIterable = {
  type t('a);
  type iterator('a);
  type symbol;

  [@bs.scope "Symbol"] [@bs.val] external iterator: symbol = "";
  [@bs.get_index] external getIterator: (t('a), symbol) => (. unit) => iterator('a) = "";
  [@bs.send] external next: iterator('a) => {. "_done": bool, "value": option('a) } = "";

  let rec iter(iterator, f) = {
    let curr = next(iterator);

    if (!curr##_done) {
      switch (curr##value) {
      | Some(value) => f(value)
      | None => ()
      };

      iter(iterator, f);
    };
  };

  let iter(f, t) = {
    let iterator = getIterator(t, iterator)(.);
    iter(iterator, f);
  };
};

[|1,2,3,4|] |> Obj.magic |> JsIterable.iter(Js.log);
