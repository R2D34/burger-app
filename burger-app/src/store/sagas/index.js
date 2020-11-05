import {takeEvery} from 'redux-saga/effects'

import {logoutSaga, checkAuthTimeoutSaga } from './auth';


import * as actionTypes from "../actions/actionsTypes"

export function* watchAuth (){
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
}