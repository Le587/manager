import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import {connect} from 'react-redux'



const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="nickName"
          label="nickName"
          rules={[
            {
              required: true,
              message: '输入修改后的昵称',
            },
          ]}
        >
          <Input />
        </Form.Item>
        
        
      </Form>
    </Modal>
  );
};

function CollectionsPage  (props)  {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('Received values of form: ', values);
    console.log(props)
    setVisible(false);
    props.dispatch({
      type:'changename',
      payload:{
        txt:values.nickName
      }
    })
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        修改信息
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
 

export default connect()(CollectionsPage)
