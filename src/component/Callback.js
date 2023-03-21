import React, { memo } from 'react'

const Callback = ({ newtime }) => {

  const name = 'Callback'

  console.log(name);
  console.log(newtime);
  
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default memo(Callback)
