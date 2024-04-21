'use client'
import React from 'react';
import Button from './Button';

interface CounterProps {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
    max: number;
}

const Counter: React.FC<CounterProps> = ({ counter, setCounter, max }) => {
    const increase = () => counter < max && setCounter(counter + 1);
    const decrease = () => counter > 1 && setCounter(counter - 1);

    return (
        <div className="flex items-center gap-3 rounded">
            <Button onClick={increase}> + </Button>
               <p>{counter}</p>
            <Button onClick={decrease}> - </Button>
        </div>
    );
    
};

export default Counter;

