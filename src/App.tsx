import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./Store";

/* const logCount = () => {
    const count = useCounterStore.getState().count;
    console.log("count", count);
} */

    const setCount = () => {
    useCounterStore.setState({ count: 1});
   
};

const App = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />
};

const OtherComponent = ({ count }: { count: number}) => {

    const incrementAsync = useCounterStore((state) => state.incrementAsync);
    // Runs with a delay or after waiting for something (like an API call, timeout, database).
    const decrement = useCounterStore((state) => state.decrement);
    // Runs immediately. The result is ready right away.

    useEffect(() =>  {
        setCount();
    }, []);

  return (
  <div>{count}
  <div>
    <button onClick={incrementAsync}>incrementAsync</button>
    <button onClick={decrement}>Decrement</button>
  </div>
  </div>

  );

}

export default App;
