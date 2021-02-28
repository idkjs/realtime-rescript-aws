module MakeHello = (
  F: {
    let enabled: bool
  },
) => {
  let sayHello = () => F.enabled ? "Hello" : "GoodBye"
}

module Hello = MakeHello({
  let enabled = false
})


