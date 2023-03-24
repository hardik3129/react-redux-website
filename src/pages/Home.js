import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { deleteproduct } from "../redux/Action/product.action";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/Action/userapi.action";


const Home = () => {
  
  const productdata = useSelector((data) => data.productreduser.product);
  const data = useSelector((data) => data.userreduser.users || [])
  const [Phone, setPhone] = useState({})
  const Dispatch = useDispatch()
  const navigate = useNavigate()
  
  const OnClickDelete = (id) => {
    Dispatch(deleteproduct(id))
  }
  
  const OnClickEdit = (id) => {
    navigate(`/editproducts/${id}`)
  }
  
  useEffect(() => {
    Dispatch(setUser())
  },[])
  
  const onChangeNumber = (event) => {
    if (event.target.value.match(/^\d{10}$/)) {
      setPhone({ phone : event.target.value, AddClass : 'Green' })
    } else {
      setPhone({ ...Phone, AddClass : 'Red' })
    }
  }
  
  return (
    <>
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
      <section className="text-center container">
      <div className="d-flex phone-input">
        <input onChange={onChangeNumber} type='number' name="phone" placeholder="Phone" className={`Green-input form-control ${Phone.AddClass}`} />
      </div>
        <h1 className="fw-bold">Prodcut Data</h1>
        <Table dark>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productdata?.map((i) => {
              return (
                <tr key={Math.random()}>
                  <td>{i?.name}</td>
                  <td>{i?.quantity}</td>
                  <td>${i?.price}</td>
                  <td className="d-flex justify-content-center">
                    <button className="btn text-light me-2 d-flex align-items-center justify-content-center" onClick={() => OnClickDelete(i.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                      </svg>
                    </button>
                    <button className="btn text-light d-flex align-items-center justify-content-center" onClick={() => OnClickEdit(i.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </section>
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>Check our Team</p>
          </div>
          <div className="row">
            {
              data.map((i) => {
                return (
                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={Math.random()}>
                    <div className="member" data-aos="fade-up" data-aos-delay={100}>
                      <div className="member-img">
                        <img src={i.image} className="img-fluid" alt='' />
                        <div className="social">
                          <a href><i className="bi bi-twitter" /></a>
                          <a href><i className="bi bi-facebook" /></a>
                          <a href><i className="bi bi-instagram" /></a>
                          <a href><i className="bi bi-linkedin" /></a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>{i.firstName} {i.lastName}</h4>
                        <span>{i.domain}</span>
                        <div className="d-flex align-items-center">Weight : <p className="mb-0 ms-1">{i.weight}</p></div>
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
  );
};

export default Home;
