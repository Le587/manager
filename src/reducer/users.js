//纯函数  这个reducer作为登录的管理员信息的仓库
import {GET_USERLIST,DEL_USERS} from '../actions/getusersname'
// import {fromJS} from 'immutable'


const initstate = {
    initname:'admin',
    isLoading:false,  //用来控制loading的状态
    list:[
        {id:1,title:'邮件1',desc:"123456789",hasRead:false},
        {id:2,title:'邮件2',desc:"123456789",hasRead:true},
        {id:3,title:'邮件3',desc:"123456789",hasRead:false},
        {id:4,title:'邮件4',desc:"123456789",hasRead:false},
        {id:5,title:'邮件5',desc:"123456789",hasRead:true}
    ]
}

const reducer = (state=initstate,action)=>{
    switch(action.type){
        case "biaoji":
            return {
                ...state,
                list:state.list.map(item=>{
                    if(item.id === action.id){
                        item.hasRead = true
                    }
                    return item
                })
            }
        case 'allbiaoji':
            return{
                ...state,
                list:state.list.map(item=>{
                    item.hasRead=true
                    return item

                })
            }
        case 'changename' :
            return {
                ...state,
                initname:action.payload.txt
            }
        default:
            return state
    }
}
export default reducer


