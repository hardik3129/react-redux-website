import { call, put, takeEvery } from "redux-saga/effects";

const GetProduct = async () => {
    const respone = await fetch('https://dummyjson.com/products')
    const res = await respone.json()
    return res.products
}

function* FeatchProduct () {
    console.log("1234567");
    try {
        const data = yield call(GetProduct)
        console.log(data);
        yield put({ type : 'GET_PRODUCT_DATA', payload : data })
    } catch (error) {
        console.log(error);
    }
}

function* WatcherProductfetch () {
    yield takeEvery('FETCH_PRODUCT',FeatchProduct)
}

export default WatcherProductfetch