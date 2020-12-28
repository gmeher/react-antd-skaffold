import React, { FC, useState } from 'react';
import { Form, Input, Button, Typography} from 'antd'
import RenderMessage from 'components/render-message';
import { Link } from 'react-router-dom';
import Icon, { LockOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';

import '../styles.less';
import sleep from 'utils/sleep';

const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
wrapperCol: {offset:2, span: 24 },
};

const Login: FC = () => {

  const [loading, setLoading] = useState(false);
  const onFinish = async(values: any) => {
    setLoading(true);
    await sleep(4000)
    console.log("done")
    setLoading(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const error: any[] = [];
  return (
    <div className="main">
      <Title level={4} style={{ marginBottom: 24 }}>
        <Icon type="lock" className="icon" /> Login
      </Title>
      {error &&
        error.map(e => <RenderMessage message={e.msg} type="error" onClose={()=>null}/>)
      }
      <Form 
        {...layout} 
        className="login-form" 
        name="login" 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed} 
      >
        <Form.Item
          label="username"
          name="username"
          rules={[{required: true, message: "please enter your username!"}]}
        >
          <Input
            suffix={<UserOutlined  style={{ opacity: '0.5' }} />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[
            {required: true, message: "please enter your password!"},
          ]}
        >
          <Input.Password
            suffix={<LockOutlined  style={{ opacity: '0.5' }} />}
            placeholder="password"
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Link to="/forgot-password" className="login-form-forgot" >
            Forgot password
          </Link>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
            <LoginOutlined /> 
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div >
  );
};

export default Login;
