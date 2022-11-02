export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem){
    // console.log(`test`);
    const newCartItem = {
      ...cartItem, 
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem);
  }
}