import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE,
} from '../constants/actions';

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, images, title, price, quantitiy } = action.payload;
      const image = images[0].imageSmall;
      const product = { id, image, title, price, quantitiy, amount: 1 };

      return [...state, product];
    }

    case INCREASE:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );

    case DECREASE:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount - 1 }
          : item
      );

    case REMOVE:
      return state.filter((item) => item.id !== action.payload.id);

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
}
