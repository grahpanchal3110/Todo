import { BioProvider } from "./componets/ContexAPI/CreatContext";
import Home from "./componets/Home/Home";

function App() {
  return (
    <>
      <BioProvider>
        <Home />
      </BioProvider>
    </>
  );
}

export default App;
