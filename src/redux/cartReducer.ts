export interface CartItem {
    id: string;
    name: string;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

const cartReducer = (state: CartState = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
};

export default cartReducer;

export type CartAction = AddToCartAction | RemoveFromCartAction | ClearCartAction;

interface AddToCartAction {
    type: 'ADD_TO_CART';
    payload: CartItem;
}

interface RemoveFromCartAction {
    type: 'REMOVE_FROM_CART';
    payload: string;
}

interface ClearCartAction {
    type: 'CLEAR_CART';
}
