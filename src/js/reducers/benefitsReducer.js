export default function reducer(state={
    chicken: {
      quantity: 0,
      price: 5
    },
    pig: {
      quantity: 0,
      price: 100
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
      case "ADD_PIG": {
        return {
          ...state,
          pig: {
            quantity: state.pig.quantity + action.payload,
            price: state.pig.price * 2
          }
        }
      }
    }

  return state;
}
