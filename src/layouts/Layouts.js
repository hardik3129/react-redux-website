import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

const Layouts = (props) => {
  return (
    <>
      <Header />{props.children}<Footer />
    </>
  )
}

export default Layouts
