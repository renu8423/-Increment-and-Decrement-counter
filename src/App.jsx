import { useState } from 'react';
import './App.css'
function Counter() {
  // Correct usage: useState is called directly in the component
  const [count, setCount] = useState(0);
// const [decrement, setdecrement]= useState(0);

const max = 20;
const min = 0;
const addvalue =()=>{
if(count < max){
  setCount(count+1)
}
}

const removevalue =()=>{
    if(count >min){
      setCount( count-1)
    }
}

    return(
  <>
 <div className="counter-contener">
<div className="btn">
    <h1 className='head'>{count}</h1>
    <div className='buttonSet'>
       <button onClick={addvalue} className='baton'> Increment</button>
       <button onClick={removevalue} className='baton'>Decrement</button>
     </div>
 </div>
</div>
 </>
        
    )
}

export default Counter
