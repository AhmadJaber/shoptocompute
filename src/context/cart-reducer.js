import { ADD_TO_CART, CLEAR_CART } from '../constants/actions';

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, images, title, price } = action.payload;
      const image = images[0].imageSmall;
      const product = { id, image, title, price, amount: 1 };

      return [...state, product];
    }

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
}
