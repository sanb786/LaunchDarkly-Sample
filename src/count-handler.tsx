// useCount.ts
import { useState } from 'react';

export function CountHandler() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return { count, increment };
}
