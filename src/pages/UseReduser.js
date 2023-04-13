import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Callback from '../component/Callback'
import { productSagaaction } from '../redux/Action/productSaga.action'

const UseReduser = () => {

  const [Time, setTime] = useState(new Date().toLocaleTimeString())
  const Dispatch = useDispatch()
  const ProductData = useSelector((data) => data.productSagaReducer.ProductData)
  // const ProductData = []
  console.log(ProductData);
  
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

    useEffect(() => {
      Dispatch(productSagaaction())
    },[])

  // ====================== USEMEMO ==================
  // ====================== USECALLBACK ==================
    const memo = useCallback(() => {
      console.log("count");
      return state.count * 100
    },[state.count])
    
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
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>Check our Products</p>
          </div>
          <div className="row">
            {ProductData.map((i) => {
                return (
                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={Math.random()}>
                    <div className="member" data-aos="fade-up" data-aos-delay={100}>
                      <div className="member-img">
                        <img src={i.thumbnail} className="img-fluid" alt='' />
                        <div className="social">
                          <a href><i className="bi bi-twitter" /></a>
                          <a href><i className="bi bi-facebook" /></a>
                          <a href><i className="bi bi-instagram" /></a>
                          <a href><i className="bi bi-linkedin" /></a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>{i.title}</h4>
                        <span>{i.category}</span>
                        <div className="d-flex align-items-center">Price : <p className="mb-0 ms-1">${i.price}</p></div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </>
  )
}

export default UseReduser
