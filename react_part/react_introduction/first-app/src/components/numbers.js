import React, { useState, useEffect } from 'react';



const Number = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three'])
    const [letters, setLetters] = useState(['a', 'b', 'c'])

    const addNumber = () => {
        setNumbers([...numbers, 'four'])
    }
    
    const addLetter = () => {
        setLetters([...letters, 'd'])
    }

    useEffect( () =>{
        console.log('our use effect triggers number')
    }, [numbers])

    useEffect( () =>{
        console.log('our use effect triggers letter')
    }, [letters])

    return (
        <div>
            <h1>Numbers</h1>
            { numbers.map( (num, index) => {
                return (<h4 key={index}>{num}</h4>)
            })}

            { letters.map( (num, index) => {
                return (<h4 key={index}>{num}</h4>)
            })}

            <button onClick={addNumber}>add a number</button>
            <button onClick={addLetter}>add a letter</button>
        </div>
    )
}

export default Number