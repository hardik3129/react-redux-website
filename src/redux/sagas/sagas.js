import { call, put, takeEvery } from "@redux-saga/core/effects";

const getfetchData = async () => {
    const respone = await fetch('https://dummyjson.com/users')
    const res = await respone.json()
    console.log(res.users);
    return res.users
}

function* fetchData () {
    try {
        const data = yield call(getfetchData)
        yield put({ type : 'FETCH_DATA', payload : data })
    } catch (error) {
        alert(error)
        return false
    }
} 

function* WatcherUser () {
    yield takeEvery('USER_FETCH_DATA',fetchData)
}

export default WatcherUser