import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

const Layouts = (props) => {
  return (
    <>
      <Header />
        <div className='my-5'>{props.children}</div>
      <Footer />
    </>
  )
}

export default Layouts
