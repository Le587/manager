import {getusers,delusers} from '../request'
import {GET_USERLIST,DEL_USERS} from './getusersname'

// export const getuserslist = ()=>{
//     return dispatch=>{
//         return getusers().then(res=>{
//             dispatch({
//                 type:GET_USERLIST,
//                 payload:res
//             })
//         })
//     }
// }

// export const deloneusers = (id)=>{
//     return dispatch=>{
//         return delusers(id).then(res=>{
//             dispatch({
//                 type:DEL_USERS,
//                 payload:res._id
//             })
//         })
//     }
// }

export const abc = id=>{
    return {
        type:"biaoji",
        id
    }
}

export const markNotificationsAll = ()=>{
    return {
        type:"allbiaoji"
    }
}

export const changenickname=(txt)=>{
    return {
        type:'changename',
        payload:{
            txt
        }
    }
}