import React,{useState}from 'react';

const Usestate = () => {
    const [count , setCount] = useState(0)

    return (
        <div>

            <h1>count :{count}</h1>
            
            <button onClick={()=> setCount(count+1)} >Incremetn</button>
            <button onClick={()=> setCount(count-1)} Decrement></button>
            
        </div>
    );
};

export default Usestate;
