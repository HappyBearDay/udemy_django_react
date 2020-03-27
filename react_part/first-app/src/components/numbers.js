import React, { useState } from 'react';



const Number = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three'])

    const addNumber = () => {
        setNumbers([...numbers, 'four'])
    }
    return (
        <div>
            <h1>Numbers</h1>
            { numbers.map( (num, index) => {
                return (<h4 key={index}>{num}</h4>)
            })}
            <button onClick={addNumber}>add a number</button>
        </div>
    )
}

export default Number