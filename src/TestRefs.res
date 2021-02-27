@react.component
let make = () => {
  let clicks = React.useRef(0);

  let onClick = (_) => {
    clicks.current = clicks.current + 1;
  };

  <div onClick>
    {Belt.Int.toString(clicks.current)->React.string}
  </div>
}
