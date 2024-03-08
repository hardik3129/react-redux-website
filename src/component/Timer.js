import React from 'react'
import { useState } from 'react';

const Timer = () => {

    const [Time, setTime] = useState(new Date().toLocaleTimeString())
    
    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);

    const timer = new Date()
    var hour = timer.getHours()
    const minute = timer.getMinutes()
    const second = timer.getSeconds()
    const amOrPm = hour >= 12 ? "pm" : "am"
    
    var hour = (hour % 12) || 12
    
  return (
    <>
    {/* ================================= TIMER ================================ */}
    <section className='container mt-5 d-flex col-md-2 justify-content-around align-items-center'>
        <span>{hour}</span> :
        <span>{minute}</span> :
        <span>{second}</span>
        <span>{amOrPm}</span>
    </section>
    </>
  )
}

export default Timer
