import { useState, useCallback } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFunction = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },
        [],
    )
    

    // const incrementFunction = () => {
    //     setCounter(counter +1);
    // }
  return (
        <>
            <h1> useCallBack Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFunction} />
        </>
  )
}
