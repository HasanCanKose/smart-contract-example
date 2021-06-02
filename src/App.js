import "./App.css";
import Contract from "./components/contract/Contract";
import Header from "./components/header/Header";
import ContractState from "./context/contract/ContractState";

function App() {
  return (
    <ContractState>
      <>
        <Header />
        <Contract />
      </>
    </ContractState>
  );
}

export default App;
