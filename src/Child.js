import React, { useEffect, useState } from 'react';

export default function Child(props){

    const [count, setCount] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        console.log("increase by" + count)
      },[count])
    

    return(

        <>
        <h1>Hi from child {props.name}</h1>
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      </>
    )
}