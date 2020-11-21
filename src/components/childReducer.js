import React, {useContext} from 'react'
import { CountContext } from "./reducer";


function ChildReducer() {
    const props = useContext(CountContext);
    return (
        <div>
             {props.childCount.count1}
          <button onClick={() => props.countDispatch({ type: 'increment1' })}>+1</button>
          <button onClick={() => props.countDispatch({ type: 'decrement1' })}>-1</button>
          <button onClick={() => props.countDispatch({ type: 'set1', count: 0 })}>reset</button>
        </div>
    )
}

export default ChildReducer

