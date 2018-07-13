
export default async function post(url,method,data,successCallback,errCallback) {
  await makeRequest(url,method,data,successCallback,errCallback)
}
function makeRequest(url,method,data,successCallback,errCallback){
  const requestUrl = `${url}`;
  const body = {};
  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': ''
  };
  const options = {
    method: method,
    headers: headers,
  }
  if(method === 'POST'){
    options.body =  data
  }

  fetch(requestUrl, options).then(res => {
    
    if (res && res.status === 200) {
      return res.json();
    } else {
      throw new Error('server');
    }
  }).then(res => {
    if(res && res.code === 1) {
      successCallback(res);
    }else {
      errCallback(res);
    }
  }).catch(err => {
    // 处理错误
  })
}
