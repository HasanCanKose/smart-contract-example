import "./App.css";
import Contract from "./components/contract/Contract";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContractState from "./context/contract/ContractState";

function App() {
  return (
    <ContractState>
      <>
        <Header />
        <Contract />
        <Footer />
      </>
    </ContractState>
  );
}

export default App;
