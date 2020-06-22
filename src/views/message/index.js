import React, { Component  } from 'react'
import {Card,Button,List, Divider} from 'antd'
import E from 'wangeditor'
import './edit.less'



export default class index extends Component {
    constructor(){
        super()
        this.state={
            textlist:[]
        }
    }
    componentDidMount(){
        this.editor = new E(this.text)
        this.editor.create()
    }
    submittxet=()=>{
        this.setState({
            textlist:[this.editor.txt.html(),...this.state.textlist]
        })
        this.editor.txt.clear()
    }
    render() {
        return (
            <>
                <Card >
                    <div ref={el=>this.text=el} ></div>
                    <Button type="primary" style={{marginTop:10} }  onClick={this.submittxet}>发表</Button>
                </Card>
                <Card>
                <Divider orientation="left">留言板</Divider>
                    <List
                        size="large"
                        bordered
                        dataSource={this.state.textlist}
                        renderItem={item => <List.Item><div dangerouslySetInnerHTML = {{ __html: item }} /></List.Item>}
                    />
                </Card>
            </>
        )
    }
}
