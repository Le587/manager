import axios from 'axios'
//登录请求，不需要token
const service = axios.create({
    baseURL:'http://localhost:3009'
})

//请求需要token，之前拦截加入token
const service2 = axios.create({
    baseURL:'http://localhost:3009'
})
service2.interceptors.request.use(config=>{
    config.headers = {...config.headers,authorization:'Bearer '+localStorage.getItem('token')}
    // console.log('config',config)
    return config
})
service2.interceptors.response.use(res=>{
    return res
})

export const loginserve = (values)=>{
    return service.post('/api/v1/auth/manager_login',{
        'userName':values.username,
        'password':values.password
    })
}


//增加用户
export const newusers=(values)=>{
    return service2.post('/api/v1/admin/users',{
        'userName':values.username,
        'password':values.password,
        'nickName':values.nickName
    })
}
//查询所有用户
export const getusers=()=>{
    return service2.get('/api/v1/admin/users')
}

//删除用户
export const delusers=(id)=>{
    return service2.delete(`/api/v1/admin/users/${id}`)
}