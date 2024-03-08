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
    
    const portfolioGallery = [
      {
        image : 'assets/img/portfolio/portfolio-1.jpg',
        type : 'App',
        name : 'App 1',
      },
      {
        image : 'assets/img/portfolio/portfolio-2.jpg',
        type : 'Web',
        name : 'Web 3'
      },
      {
        image : 'assets/img/portfolio/portfolio-3.jpg',
        type : 'App',
        name : 'App 2'
      },
      {
        image : 'assets/img/portfolio/portfolio-4.jpg',
        type : 'Card',
        name : 'Card 2'
      },
      {
        image : 'assets/img/portfolio/portfolio-5.jpg',
        type : 'Web',
        name : 'Web 2'
      },
      {
        image : 'assets/img/portfolio/portfolio-6.jpg',
        type : 'App',
        name : 'App 3'
      },
      {
        image : 'assets/img/portfolio/portfolio-7.jpg',
        type : 'Card',
        name : 'Card 1'
      },
      {
        image : 'assets/img/portfolio/portfolio-8.jpg',
        type : 'Card',
        name : 'Card 3'
      },
      {
        image : 'assets/img/portfolio/portfolio-9.jpg',
        type : 'Web',
        name : 'Web 3'
      }
    ]
    
    useEffect(() => {
      setPaginationData(ProductData.slice(FirstData, LastData))
    },[page])

    const OnclickChangePage = (num) => {
      localStorage.setItem('SetPage',num)
      setpage(localStorage.getItem('SetPage'))
    }
    
  return (
    <>
    {/* ==================================== PORTFOLIO ==================================== */}
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Check our Portfolio</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-App">App</li>
                <li data-filter=".filter-Card">Card</li>
                <li data-filter=".filter-Web">Web</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
            {
              portfolioGallery.map((i) => {
                return (
                  <div className={`col-lg-4 col-md-6 portfolio-item filter-${i.type}`}>
                    <div className="portfolio-wrap">
                      <img src={i.image} className="img-fluid" alt />
                      <div className="portfolio-info">
                        <h4>{i.name}</h4>
                        <p>{i.type}</p>
                        <div className="portfolio-links">
                          <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title={i.name}><i className="bx bx-plus" /></a>
                          <a href="#" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* ============================= PAGINATION ============================= */}
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
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
