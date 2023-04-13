import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Portfolio = () => {

    const [page, setpage] = useState(localStorage.getItem('SetPage') || 1)
    const [PaginationData, setPaginationData] = useState([])
    const ProductData = useSelector((data) => data.productSagaReducer.ProductData) 
    const perpage = 8
    const LastData = page * perpage
    const FirstData = LastData - perpage
    
    useEffect(() => {
      setPaginationData(ProductData.slice(FirstData, LastData))
    },[page])

    const OnclickChangePage = (num) => {
      localStorage.setItem('SetPage',num)
      setpage(localStorage.getItem('SetPage'))
    }
    
  return (
    <>
      <div className='d-flex justify-content-center'>
        {
          Array.from(Array(Math.ceil(ProductData.length / perpage)), (_, i) => {
            return(
              <Pagination className='me-3'>
                <Pagination.Item onClick={() => OnclickChangePage(i + 1)}>{i + 1}</Pagination.Item>
              </Pagination>
            )
          })
        }
      </div>
      <section className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>Check our Product</p>
          </div>
          <div className="row">
            {
              PaginationData.map((i) => {
                return (
                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={Math.random()}>
                    <div className="member">
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
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
