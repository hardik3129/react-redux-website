import WatcherUser from "./sagas";
import { all } from 'redux-saga/effects'
import WatcherProductfetch from "./product.saga";

function* rootsaga () {
    yield all([WatcherUser(), WatcherProductfetch() ])
}


export default rootsaga