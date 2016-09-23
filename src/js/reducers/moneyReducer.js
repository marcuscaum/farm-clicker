export default function reducer(state={
    money_per_second: 10,
    money_total: 0
  }, action) {

    switch (action.type) {
      case "INC_MONEY_PER_SECOND": {
        return {...state, money_per_second: state.money_per_second + action.payload}
      }
      case "INC_MONEY_TOTAL": {
        return {...state, money_total: state.money_total + action.payload}
      }
    }

  return state;
}
