import { ORDER_ITEM } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case ORDER_ITEM:
      return {
        ...state,
        contractInfo: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
