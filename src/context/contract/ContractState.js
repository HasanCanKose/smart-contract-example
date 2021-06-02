import { useReducer } from "react";
import ContractContext from "./contractContext";
import contractReducer from "./contractReducer";
import { ORDER_ITEM } from "../types";

const ContractState = (props) => {
  const initialState = {
    contractInfo: null,
  };

  const [state, dispatch] = useReducer(contractReducer, initialState);

  const getContractInfo = (contractInfo) => {
    dispatch({ type: ORDER_ITEM, payload: contractInfo });
  };

  return (
    <ContractContext.Provider
      value={{
        contractInfo: state.contractInfo,
        getContractInfo,
      }}
    >
      {props.children}
    </ContractContext.Provider>
  );
};

export default ContractState;
