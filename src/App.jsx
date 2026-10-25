import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Homework from './components/Homework';
function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count+1);
  }
  
  const decrementCount = () => {
    setCount(count-1);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <>
    <div className='bg-info vh-100 p-4'>
      <div className='container d-flex justify-content-center align-items-center flex-column'>
        <h1 className='my-5'> Counter App </h1>
        <div className='d-flex justify-content-center align-items-center gap-3'>
          <button className='btn btn-danger' onClick={decrementCount}> - </button>
          <h2> {count} </h2>
          <button className='btn btn-danger' onClick={incrementCount}> + </button>
        </div>
        <button className='btn btn-primary mt-4' onClick={resetCount}> Reset </button>
      </div>
        <hr/>
      {/* homework will be displayed below */}
      <Homework/>

    </div>
  
    </>
  )
}

export default App
