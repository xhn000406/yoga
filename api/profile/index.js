import {httpRequest} from '../index'
export const apiUpdateUserInfo = async (data)=>{
  return await httpRequest({
    url:"/updateInfo",
    method:'POST',
    data
  })
}