import { createSlice } from '@reduxjs/toolkit';
import { adminMarketRequestInterface, adminNoticeInterface, adminReportInterface } from '../../interfaces/AdminInterface';

const noticeList: adminNoticeInterface[] = [];
const marketRequestList: adminMarketRequestInterface[] = [];
const reportList: adminReportInterface[] = [];

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    marketRequestList,
    noticeList,
    marketTotalPage: 0,
    noticeTotalPage: 0,
    noticeDetail: {
      noticeId: '',
      title: '',
      content: '',
      writeDate: '',
    },
    marketDetail: {
      marketId: '',
      title: '',
      status: '',
    },
    reportList,
    isAdminLoginLoading: false,
    isAdminLoginSuccess: false,
    isAdminLoginError: null,
    isGetNoticeLoading: false,
    isGetNoticeSuccess: false,
    isGetNoticeError: null,
    isGetNoticeDetailLoading: false,
    isGetNoticeDetailSuccess: false,
    isGetNoticeDetailError: null,

    isGetMarketLoading: false,
    isGetMarketSuccess: false,
    isGetMarketError: null,
    isGetMarketDetailLoading: false,
    isGetMarketDetailSuccess: false,
    isGetMarketDetailError: null,
  },
  reducers: {
    adminLoginRequest: (state, action) => {
      state.isAdminLoginLoading = true;
      state.isAdminLoginSuccess = false;
      state.isAdminLoginError = null;
    },
    adminLoginRequestSuccess: (state, action) => {
      state.isAdminLoginLoading = false;
      state.isAdminLoginSuccess = true;
      state.isAdminLoginError = null;
    },
    adminLoginRequestError: (state, action) => {
      state.isAdminLoginLoading = false;
      state.isAdminLoginSuccess = false;
      state.isAdminLoginError = action.payload;
    },
    getNoticeRequest: (state, action) => {
      state.isGetNoticeLoading = true;
      state.isGetNoticeSuccess = false;
      state.isGetNoticeError = null;
    },
    getNoticeRequestSuccess: (state, action) => {
      state.isGetNoticeLoading = false;
      state.isGetNoticeSuccess = true;
      state.isGetNoticeError = null;
      state.noticeTotalPage = action.payload.totalPage;
      state.noticeList = action.payload.data;
    },
    getNoticeRequestError: (state, action) => {
      state.isGetNoticeLoading = false;
      state.isGetNoticeSuccess = false;
      state.isGetNoticeError = action.payload;
    },
    getNoticeDetailRequest: (state, action) => {
      state.isGetNoticeDetailLoading = true;
      state.isGetNoticeDetailSuccess = false;
      state.isGetNoticeDetailError = null;
      state.noticeDetail = action.payload;
    },

    getMarketRequest: (state, action) => {
      state.isGetMarketLoading = true;
      state.isGetMarketSuccess = false;
      state.isGetMarketError = null;
    },
    getMarketRequestSuccess: (state, action) => {
      state.isGetMarketLoading = false;
      state.isGetMarketSuccess = true;
      state.isGetMarketError = null;
      state.marketTotalPage = action.payload.totalPage;
      state.marketRequestList = action.payload.data;
    },
    getMarketRequestError: (state, action) => {
      state.isGetMarketLoading = false;
      state.isGetMarketSuccess = false;
      state.isGetMarketError = action.payload;
    },
    getMarketDetailRequest: (state, action) => {
      state.isGetMarketDetailLoading = true;
      state.isGetMarketDetailSuccess = false;
      state.isGetMarketDetailError = null;
      state.marketDetail = action.payload;
    },
  },
});

export const {
  adminLoginRequest,
  adminLoginRequestSuccess,
  adminLoginRequestError,
  getNoticeRequest,
  getNoticeRequestSuccess,
  getNoticeRequestError,
  getNoticeDetailRequest,
  getMarketRequest,
  getMarketRequestSuccess,
  getMarketRequestError,
  getMarketDetailRequest,
} = adminSlice.actions;

export default adminSlice.reducer;
