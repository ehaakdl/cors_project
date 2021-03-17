import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getNoticeRequestAsync } from '../../api/noticeApi';
import { getMarketRequestAsync } from '../../api/marketApi';
import {
  adminLoginRequest,
  adminLoginRequestSuccess,
  adminLoginRequestError,
  getNoticeRequest,
  getNoticeRequestSuccess,
  getNoticeRequestError,
  getMarketRequest,
  getMarketRequestSuccess,
  getMarketRequestError,
} from './adminSlice';

function* adminLogin(action: PayloadAction<{ email: string, passwd: string }>) {
  try {
    yield console.log(action);
  } catch (error) {
    yield put({
      type: adminLoginRequestError,
      payload: error,
    });
  }
}

function* getNotice(action: PayloadAction<number>) {
  try {
    const result = yield getNoticeRequestAsync(action.payload);
    console.log(result);
    yield put({
      type: getNoticeRequestSuccess,
      payload: result,
    });
  } catch (error) {
    yield put({
      type: getNoticeRequestError,
      payload: error,
    });
  }
}


function* getMarket(action: PayloadAction<number>) {
  try {
    const result = yield getMarketRequestAsync(action.payload);
    yield put({
      type: getMarketRequestSuccess,
      payload: result,
    });
  } catch (error) {
    yield put({
      type: getMarketRequestError,
      payload: error,
    });
  }
}

function* watchAdminLogin(): Generator {
  yield takeLatest(adminLoginRequest, adminLogin);
}

function* watchGetNotice(): Generator {
  yield takeLatest(getNoticeRequest, getNotice);
}

function* watchGetMarket(): Generator {
  yield takeLatest(getMarketRequest, getMarket);
}

export default function* noticeSaga(): Generator {
  yield all([
    fork(watchAdminLogin),
    fork(watchGetNotice),
    fork(watchGetMarket),//여기 어떻게 동작하는지 주시하기
  ]);
}