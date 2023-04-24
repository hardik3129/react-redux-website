import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../context/Context'

const Header = () => {

  const Theame = useContext(Context)
  
  return (
    <>
    <header id="header" className={`fixed-top header-scrolled ${Theame}`}>
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0"><a href="index.html">Gp<span>.</span></a></h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><Link className="nav-link scrollto" to={'/'}>Home</Link></li>
            <li><Link className="nav-link scrollto" to={'/addproducts'}>Add Prodcut</Link></li>
            <li><Link className="nav-link scrollto" to={'/UseReduser'}>UseReduser</Link></li>
            <li><Link className="nav-link scrollto" to={'/portfolio'}>Portfolio</Link></li>
            <li><Link className="nav-link scrollto" to={'/chart'}>Chart</Link></li>
            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><Link>Contact</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        <a href="#about" className="get-started-btn scrollto">Get Started</a>
      </div>
  </header>
  <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={150}>
            <div className="col-xl-6 col-lg-8">
              <h1>
                Powerful Digital Solutions With Gp<span>.</span>
              </h1>
              <h2>We are team of talented digital marketers</h2>
            </div>
          </div>
          <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay={250}>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line" />
                <h3>
                  <a href>Lorem Ipsum</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line" />
                <h3>
                  <a href>Dolor Sitema</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-calendar-todo-line" />
                <h3>
                  <a href>Sedare Perspiciatis</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-paint-brush-line" />
                <h3>
                  <a href>Magni Dolores</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-database-2-line" />
                <h3>
                  <a href>Nemos Enimade</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  )
}

export default Header
