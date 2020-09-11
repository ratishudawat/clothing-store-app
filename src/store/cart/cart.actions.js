const { cartActionTypes } = require('./cart.types');

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});
