export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "ADD_TO_CART": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === payload.mainId
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        namePrompt: payload.displayName,
      };
    }
    case "TOGGLE_CART":
      return {
        ...state,
        isCartShow: !state.isCartShow,
      };
    case "CHANGE_QUANTITY": {
      const newOrder = state.order.map((item) => {
        if (item.mainId === payload.id) {
          if (payload.bool) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return {
              ...item,
              quantity: item.quantity > 0 ? item.quantity - 1 : 0,
            };
          }
        } else {
          return {
            ...item,
          };
        }
      });
      return {
        ...state,
        order: newOrder,
      };
    }
    case "CLOSE_PROMPT":
      return {
        ...state,
        namePrompt: "",
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        order: state.order.filter((item) => item.mainId !== payload.id),
      };
    default:
      return state;
  }
}
