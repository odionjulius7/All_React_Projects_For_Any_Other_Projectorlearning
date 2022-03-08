const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    }
  }
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)// filter to return items that have amount value greater than 0
    return { ...state, cart: tempCart }
  }
  if (action.type === 'GET_TOTALS') {
    // destructure our total & amount from cartTotal(our accumulator) and then get the total of each
  //   so we return each accumulator(cartTotal) item to these destructured one
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem // loop thru each items
        const itemTotal = price * amount // act item in the cart times(*) the price of the individual item 

// accumulating all itemTotal to get one total
        cartTotal.total += itemTotal // add each total of individual item to the cartTotal total  
        cartTotal.amount += amount // add each total of individual item to the cartTotal amount
        return cartTotal // so we returning cartTotal to the variable(destructured) but we destructured
        //  our variable already and return each cartTotal.amount, cartTotal.total accordingly
      },
      {
        // note: we destructured the cartTotal(which is an object) & (it's our accumulator)
        total: 0, // accumulator of cartTotal.tatal is 0, cartTotal.amount is 0
        amount: 0,// start adding each [cartTotal] total price & amount to 0
      }
    )
    total = parseFloat(total.toFixed(2))

    return { ...state, total, amount }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false }
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 }
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0) // filter to return items that have amount value greater than 0
    return { ...state, cart: tempCart }
  }
  throw new Error('no matching action type')
}

export default reducer
