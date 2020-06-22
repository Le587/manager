import React, { Component } from 'react'
import { Card, Button, List ,Badge} from 'antd';
import {connect} from 'react-redux'
import {abc,markNotificationsAll} from '../../actions/getusers'


  const mapState = state=>{
    return {
        list:state.users.list,
        isLoading:state.users.isLoading
    }
}
@connect(mapState,{abc,markNotificationsAll})

 class index extends Component {
    biaoji=(id)=>{
        this.props.abc(id)
    }
    render() {
        return (
            <div>
               <Card title="个人中心" extra={<Button 
                        // disabled={this.props.list.every(item=>item.hasRead===true)}
                        onClick={this.props.markNotificationsAll}
                    >全部标记为已读</Button>} >
                    <List
                        itemLayout="horizontal"
                        dataSource={this.props.list}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<Badge dot={!item.hasRead}>{item.title}</Badge>}
                                    description={item.desc}
                                />
                                {item.hasRead ? "" : <Button onClick={this.biaoji.bind(this,item.id)}>标记为已读</Button>}
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        )
    }
}
export default index