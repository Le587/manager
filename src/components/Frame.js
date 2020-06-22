import React, { Component } from 'react'
import { Layout, Menu,Dropdown,Avatar,Badge ,Button,Modal,Form, Input} from 'antd';
import Logo1 from "./logo.png"
import Logo2 from "./logo2.jpg"
import './index.less'
import {withRouter} from 'react-router-dom'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    VideoCameraOutlined,
    DownOutlined ,
} from '@ant-design/icons';
import {connect} from 'react-redux'

import CollectionsPage from './collectionform'


const { Header, Sider, Content  } = Layout;
const {SubMenu} = Menu


const mapState = state=>{
    return {
        initname:state.users.initname,
        list:state.users.list,
        isLoading:state.users.isLoading
    }
}
@connect(mapState)
@withRouter
class Frame extends Component {
     menu = ()=>{
        return (
        <Menu>
          <Menu.Item>
              <CollectionsPage ></CollectionsPage>
          </Menu.Item>
          <Menu.Item>
              <Button onClick={this.gotomeanager}>管理用户</Button>
          </Menu.Item>
          <Menu.Item>
          <Button onClick={this.backlogin}>退出</Button>
    
          </Menu.Item>
        </Menu>
      )}
    constructor(){
        super()
        this.state={
            collapsed: false,
            visible: false
        }
    }
    changeinfo=()=>{
        console.log(1)
            this.setState({
              visible: true,
            });
          
    }
    handleOk = e => {
        console.log(e);
        // console.log(this.props.form.validateFields);
        this.setState({
          visible: false,
        });
      };
   
    backlogin=()=>{
        localStorage.clear()
        this.props.history.push('/login')
    }
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
        this.onFinish()
      };
    gotomeanager=()=>{
        this.props.history.push('/admin/manager')
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    handlepush=({key})=>{
        this.props.history.push(key)
      }
    render() {
        return (
            <>
                 <Layout>
                    <Sider  collapsible collapsed={this.state.collapsed}>
                        <div className="logo" >
                            <img src={this.state.collapsed?Logo2:Logo1} alt="logo"/>
                        </div>
                    <Menu theme="dark" mode="inline"
                        defaultSelectedKeys={'/admin/dashboard'} 
                        onClick={this.handlepush}
                        selectedKeys={[this.props.location.pathname]}
                    >
                        <Menu.Item key={'/admin/dashboard'}>
                            <VideoCameraOutlined />
                            <span>仪表盘</span>
                        </Menu.Item>
                        
                        <Menu.Item key={'/admin/settings'}>
                            <VideoCameraOutlined />
                            <span>个人设置</span>
                        </Menu.Item>
                        <SubMenu  title="后台管理">
                            <Menu.Item key={'/admin/manager'}>用户管理</Menu.Item>
                            <Menu.Item key={'/admin/message'}>留言板 </Menu.Item>
                        </SubMenu>
                        
                    </Menu>
                    </Sider>
                    <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0,background:"white" }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <Dropdown overlay={this.menu}>
                            <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Badge count={this.props.list.filter(item=>!item.hasRead).length} offset={[15,0]}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    {this.props.initname} <DownOutlined />
                                </Badge>
                            </div>

                        </Dropdown>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background:'#fff',
                        overflowY:"auto",
                        }}
                    >
                        {this.props.children}
                    </Content>
                    </Layout>
                </Layout>
                
            </>
        )
    }
}
export default Frame
