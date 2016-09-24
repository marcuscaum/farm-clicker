export function addMoneyPerSecond(value) {
  return {
    type: "INC_MONEY_PER_SECOND",
    payload: value
  }
}

export function addMoneyTotal(value) {
  return {
    type: "INC_MONEY_TOTAL",
    payload: value
  }
}

export function reduceMoneyTotal(value) {
  return {
    type: "DEC_MONEY_TOTAL",
    payload: value
  }
}
