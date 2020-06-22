import React, { Component } from 'react'
import { Table, Form, Input, Button, Checkbox, Card } from 'antd';
import { newusers } from '../../request'
import { connect } from 'react-redux'
import { getuserslist, deloneusers } from '../../actions/getusers'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
// const columns = [
//     {
//       title: 'Id',
//       dataIndex: '_id',
//       key: '_id',
//     },
//     {
//       title: '用户名',
//       dataIndex: 'userName',
//       key: 'userName',
//     },
//     {
//       title: '昵称',
//       dataIndex: 'nickName',
//       key: 'nickName',
//     },

//     {
//       title: '操作',
//       dataIndex: 'action',
//       key: 'action',
//       render: (text, record) => (
//         <>
//             <button onClick={}>删除</button>
//             <button>编辑</button>
//         </>
//       ),
//     },
//   ];





const mapState = state => {
  return {
    // list:state.getIn(['users','newusers'])
    // list:state.users.get('newusers')
    list: state.users.newusers
  }
}
@connect(mapState, { getuserslist, deloneusers })
class index extends Component {
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
      ]
    }
  }
  componentDidMount() {
    this.props.getuserslist()
    //打印从redux中得到的数组
  }
  
  onFinish = values => {
    console.log('Success:', values);
    newusers(values)
    console.log(this.props)
  };
  //点击删除
  del = (id) => {
    console.log(1111, id)
    this.props.deloneusers(id)
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
        <Table columns={this.state.columns} dataSource={this.props.list} />
      </div>
    )
  }
}
export default index