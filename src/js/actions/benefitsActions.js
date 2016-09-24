export function addChicken(quantity) {
  return {
    type: "ADD_CHICKEN",
    payload: quantity
  }
}

export function addPig(quantity) {
  return {
    type: "ADD_PIG",
    payload: quantity
  }
}
