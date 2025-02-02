function useCounter(initialValue = 0) {
    let count = initialValue;

    const increment = () => {
        count += 1;
        console.log(`Count: ${count}`);
    };

    const decrement = () => {
        count -= 1;
        console.log(`Count: ${count}`);
    };

    return {
        count,
        increment,
        decrement
    };
}

export default useCounter;