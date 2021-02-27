


function getInputValue(e) {
  return e.target.value;
}

function extractMessageFrom($$event) {
  return $$event.value.data.onCreateMessage.message;
}

export {
  getInputValue ,
  extractMessageFrom ,
  
}
/* No side effect */
