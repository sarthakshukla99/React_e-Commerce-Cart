export const reducer = (state,action) => {
    if(action.type === 'REMOVE_ITEM'){
        return{
            ...state,
            items: state.items.filter((curElem) => {
                return curElem.id !== action.payload;
            }),
        }
    }

    if(action.type === 'CLEAR_CART'){
        return {...state, items: [] };
    }

    if(action.type === 'INCREMENT'){
        let updatedCart = state.items.map((curElem) => {
            if(curElem.id === action.payload){
                return{ ...curElem, quantity: curElem.quantity + 1};
            }
            return curElem
        });
        return {...state, items: updatedCart}
    }

    if(action.type === 'DECREMENT'){
        let updatedCart = state.items.map((curElem) => {
            if(curElem.id === action.payload && curElem.quantity > 0){
                return{ ...curElem, quantity: curElem.quantity - 1}
            }

            return curElem
        })        
        // }).filter((curElem) => {
        //     return curElem.quantity !== 0;
        // })
        return {...state, items: updatedCart}
    }

    if(action.type === 'GET_TOTAL'){
        let { totalItem, totalAmount } = state.items.reduce((accum, curVal) => {
            let { quantity, price } = curVal;
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount;

            accum.totalItem += quantity;
            return accum
        }, {
            totalItem: 0,
            totalAmount: 0,
        });
        return {...state, totalItem, totalAmount }
    }

    return state;
}