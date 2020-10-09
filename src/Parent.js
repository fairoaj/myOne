import React, { useState } from 'react';
import Child from './Child';

export default function Parent(){

const [count, setcount] = useState(0)

const counting=()=>{
    setcount(count+1)
}

    return(
        <>
        <h1>Hi</h1>
        <Child name="jack"/>
        <button onClick={counting}>Hi</button>
        <h3>button clicked {count} times</h3>
        </>
    )
}