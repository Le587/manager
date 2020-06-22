import React, { Component } from 'react'
import {loginserve} from  '../../request'
import {Card,Form, Input, Button, Checkbox,Modal} from 'antd'

const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 10,
    },
  };
  

export default class index extends Component {
    constructor(){
        super()
        this.state={
            visible:false
        }
    }
    onFinish = values => {
        loginserve(values).then(res=>{
            if(res.data.code==='success'){
                localStorage.setItem('token',res.data.token)
                this.props.history.push('/admin')
            }else{
               alert(res.data.message)
            }
            
        })
      };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      
    
      
    render() {
        console.log(this.props)
        return (
            <>
            <Card style={{width:600,margin:'auto',marginTop:100,background:"skyblue"}}>
                <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" >
                    Submit
                    </Button >
                    
                </Form.Item>
                </Form>
            </Card>
             
           </>
        )
    }
}
