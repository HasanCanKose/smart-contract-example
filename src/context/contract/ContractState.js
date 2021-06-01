import { useReducer } from "react";
import ContractContext from "./contractContext";
import contractReducer from "./contractReducer";

const ContractState = (props) => {
  const initialState = {
    itemId: null,
    itemName: null,
    itemType: null,
    itemWeight: null,
  };

  const [state, dispatch] = useReducer(contractReducer, initialState);

  return <ContractContext.Provider>{props.children}</ContractContext.Provider>;
};

export default ContractState;
