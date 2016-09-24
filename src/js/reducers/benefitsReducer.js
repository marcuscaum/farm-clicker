export default function reducer(state={
    chicken: {
      quantity: 0,
      price: 5
    }
  }, action) {

    switch (action.type) {
      case "ADD_CHICKEN": {
        return {
          ...state,
          chicken: {
            quantity: state.chicken.quantity + action.payload,
            price: state.chicken.price * 2
          }
        }
      }
    }

  return state;
}
