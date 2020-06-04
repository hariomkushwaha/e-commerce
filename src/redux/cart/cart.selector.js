import {createSelector} from 'reselect';
  

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart=> cart.cartItems
);

export const selectCartItemsCount= createSelector(
    [selectCartItem],
    cartItems=>cartItems.reduce((accumalatedQuantity,cartItems)=> accumalatedQuantity + cartItems.quantity,
    0 )
);