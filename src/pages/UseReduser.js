import React, { useCallback, useReducer, useState } from 'react'
import Callback from '../component/Callback'

const UseReduser = () => {

  const [Time, setTime] = useState(new Date().toLocaleTimeString())
  
    const initialstate = {
        count : 10,
        count1 : 10
    }

    const reduser = (state, action) => {

        if (action.type === 'INCREMENT') {
            return {...state, count : state.count + 1}
        }

        if (action.type === 'DICREMENT') {
            return {...state, count1 : state.count1 === 0 ? state.count1 : state.count1 - 1}
        }

        return state
    }

    const [state, dispatch] = useReducer(reduser, initialstate)

    const Onincrement = () => {
        dispatch({ type : 'INCREMENT' })
    }

    const OnDicrement = () => {
        dispatch({ type : 'DICREMENT' })
    }

  // ====================== USEMEMO ==================    
    const memo = useCallback(() => {
      console.log("count");
      return state.count * 100
    },[state.count])
    
    // ====================== USECALLBACK ==================
    const changeTime = () => {
      setTime(new Date().toLocaleTimeString())
    }
    
    
  return (
    <>
      <section className='container mt-5'>
        <h2 className='text-center'>UseReduser</h2>
        <button className='btn btn-secondary' onClick={Onincrement}>+</button>{state.count} &nbsp;
        <button className='btn btn-secondary' onClick={OnDicrement}>-</button>{state.count1}
        <br />
        {memo} &nbsp;
        {Time}
        <Callback newtime={state.count} />
        <button className='btn btn-secondary' onClick={changeTime}>Update Time</button>
      </section>
    </>
  )
}

export default UseReduser
