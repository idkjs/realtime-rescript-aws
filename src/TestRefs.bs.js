

import * as React from "react";

function TestRefs(Props) {
  var clicks = React.useRef(0);
  var onClick = function (param) {
    clicks.current = clicks.current + 1 | 0;
    
  };
  return React.createElement("div", {
              onClick: onClick
            }, String(clicks.current));
}

var make = TestRefs;

export {
  make ,
  
}
/* react Not a pure module */
