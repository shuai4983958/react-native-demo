import * as actionTypes from './index';
import post from '../utils/fetch';

export function homeAdd(initCount) {
  return {
    type: actionTypes.HOME_ADD,
    initCount
  }
}

export function homeCut(initCount) {
  return {
    type: actionTypes.HOME_CUT,
    initCount
  }
}

export function getSomeData(url) { //命令式的 thunk 对于复杂异步数据流的表现力有限
  return dispatch => {
    post(url,'GET',{}, res => {
      const someData = res.data;
      const obj = {initCount:someData}
      dispatch({
        type: actionTypes.HOME_ADD,
        initCount:{initCount:'我最帅'},
      })
    })
  }
}

export function setSomeData(data) {
  return dispatch => {
    post('/get/setdata',{}, res => {
      const someData = res.data.someData;
      dispatch({
        type: actionTypes.HOME_SET_SOMEDATA,
        someData
      })
    })
  }
}

export function fetchSagaData() {
  return {
    type: actionTypes.HOME_FETCH_SAGA_DATA
  }
}