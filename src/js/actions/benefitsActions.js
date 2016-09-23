export function addChicken(quantity, price) {
  return {
    type: "ADD_CHICKEN",
    payload: {
      quantity,
      price
    }
  }
}
