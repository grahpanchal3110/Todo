import { useContext } from "react";
import { BioContext } from "../ContexAPI/CreatContext";

const Home = () => {
  const myName = useContext(BioContext);
  return (
    <>
      <h1>Hello From Context API. My name Is {myName}.</h1>
    </>
  );
};

export default Home;

//custom Hooks

export const useBioContext = () => {
  const context = useContext(BioContext);
  return context;
};
 