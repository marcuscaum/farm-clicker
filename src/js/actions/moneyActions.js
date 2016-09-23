export function addMoneyPerSecond(quantity) {
  return {
    type: "INC_MONEY_PER_SECOND",
    payload: quantity
  }
}

export function addMoneyTotal(quantity) {
  return {
    type: "INC_MONEY_TOTAL",
    payload: quantity
  }
}
