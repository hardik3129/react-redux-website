import React from 'react'
import { useSelector } from 'react-redux'
import Timer from '../component/Timer'

const UseReduser = () => {
  const ProductData = useSelector((data) => data.productSagaReducer.ProductData)
    
  return (
    <>
      <Timer />
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
                    <div className="member" data-aos="fade-up" data-aos-delay={100}>   {/* data-aos="fade-up" data-aos-delay={100} */}
                      <div className="member-img">
                        <div className='product-tumb'>
                          <img src={i.thumbnail} className="img-fluid" alt='' />
                        </div>
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
