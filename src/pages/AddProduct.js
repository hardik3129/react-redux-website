import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editproducts, productaction } from '../redux/Action/product.action';
import { useParams } from 'react-router-dom';

const AddProduct = () => {

  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [quantity, setquantity] = useState()
  const Dispatch = useDispatch()
  const Navigate = useNavigate()
  const {id} = useParams()
  const getid = Number(id)
  const Data = useSelector((getdata) => getdata.productreduser.product)
  useEffect(() => {
    const val = Data.find((i) => i.id === getid)
    setname(val?.name)
    setprice(val?.price)
    setquantity(val?.quantity)
  },[])

  const OnChangeName = (event) => {
    setname(event.target.value)
  }
  const OnChangePrice = (event) => {
    setprice(event.target.value)
  }

  const OnChangeQuantity = (event) => {
    setquantity(event.target.value)
  }
  
  const OnSubmitHandler = () => {
    if (getid) {
      const obj = {
        id : getid,
        name : name,
        price : price,
        quantity : quantity
      }
      Dispatch(editproducts(obj))
    } 
    else {
      const obj = {
        id : new Date().getTime(),
        name : name,
        price : price,
        quantity : quantity
      }
      Dispatch(productaction(obj))
    }
    Navigate('/')
  }

  
  return (
    <section id='contact' className="contact section-spacing">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Add Prodcut</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label>Prodcut Name : </label>
                  <input onChange={OnChangeName} type="text" value={name} name="product_name" className="form-control" placeholder="Your Product Name" />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <label>Prodcut Price : </label>
                  <input onChange={OnChangePrice} type="number" value={price} className="form-control" name="price" placeholder="Price" />
                </div>
              </div>
              <div className="form-group mt-3">
                <label>Prodcut Quantity : </label>
                <input onChange={OnChangeQuantity} type="number" value={quantity} className="form-control" name="quantity" placeholder="Quantity" />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="button" onClick={OnSubmitHandler} className='btn btn-warning'>
                {getid ? 'Edit' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddProduct
