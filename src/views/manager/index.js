import React, { Component } from 'react'
import { Table, Form, Input, Button, Checkbox, Card } from 'antd';
import { newusers ,getusers,delusers} from '../../request'
// import { connect } from 'react-redux'
// import { getuserslist, deloneusers } from '../../actions/getusers'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};



export default class index extends Component {
  constructor() {
    super()
    this.state = {
      columns: [
        {
          title: 'Id',
          dataIndex: '_id',
          key: '_id',
        },
        {
          title: '用户名',
          dataIndex: 'userName',
          key: 'userName',
        },
        {
          title: '昵称',
          dataIndex: 'nickName',
          key: 'nickName',
        },

        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          render: (text, record) => (
            <>
              <button onClick={this.del.bind(this, record._id)}>删除</button>
              <button>编辑</button>
            </>
          ),
        },
      ],
      userlist:{}
    }
  }
  componentDidMount() {
    this.getlist()
    //打印从redux中得到的数组
  }
  getlist=()=>{
    getusers().then(res=>{
      console.log(res)
      res.data.users.forEach(item=>{
        item.key=item._id
      })
      this.setState({
        userlist:res.data
      })
    })
  }
  onFinish = values => {
      newusers(values).then(res=>{
        this.state.userlist.users.push(res.data)
        this.getlist()
      })
    console.log(this.state.userlist)

  };
  //点击删除
  del = (id) => {
    delusers(id)
    this.getlist()
    
  }

  //上传失败的回调
  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <div>
        <Card>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: '用户名必填' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="nickName"
              name="nickName"
              rules={[{ required: true, message: '昵称必填' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="头像"
              name="avatar"
            >
              <Input placeholder="头像必须是网址" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: '密码必填' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                新增用户
                        </Button>
            </Form.Item>
          </Form>
        </Card>
        <Table columns={this.state.columns} dataSource={this.state.userlist.users} />
      </div>
    )
  }
}