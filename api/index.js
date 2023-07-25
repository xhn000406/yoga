import  {baseUrl} from '../config'
export const httpRequest = (options)=>{
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      data: options.data,
      header: options.header || {
       token:getApp().globalData.token 
      },
      method: options.method || 'GET',
      dataType: options.dataType || 'json',
      responseType: options.responseType || 'text',
      success: res => {
        if(res.data.code === 200){
        resolve(res.data.data);
        }else{
          reject(res.data)
        }
      },
      fail: error => {
        reject(error);
      }
    });
  });
}