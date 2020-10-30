import React, { useState, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Alert, Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { CalendarSVG, PageContainer } from '../../ui';
import { auth } from '../auth';
import { FormContainer } from './FormContainer';
import { AuthContext } from '../../context';
import { ROUTES } from '../../constants';

export const SignInPage = () => {
    const { user } = useContext(AuthContext);
    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const handleFinish = async () => {
        // TODO: Handle case when email or password field is empty.
        try {
            await auth.signIn(email, password);
            history.push(ROUTES.HOME);
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    const handleFinishFailed = (errorInfo) => {
        setErrorMessage(errorInfo);
    };

    if (!!user) {
        return <Redirect to={ROUTES.HOME} />;
    }

    return (
        <PageContainer justify="center" align="middle">
            <CalendarSVG />
            <FormContainer
                welcomeMessage="Are you ready to schedule some meetings?"
                xs={22}
                sm={18}
                md={18}
                lg={8}
            >
                <h2>SIGN IN</h2>
                <Form
                    name="basic"
                    onFinish={handleFinish}
                    onFinishFailed={handleFinishFailed}
                >
                    {errorMessage && (
                        <Alert message={errorMessage} type="error" showIcon />
                    )}
                    <Form.Item
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            prefix={<MailOutlined />}
                            placeholder="email"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined />}
                            placeholder="password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            SIGN IN
                        </Button>
                    </Form.Item>
                </Form>
                <span>
                    Not a member?
                    <Button type="link" href={ROUTES.CREATE_ACCOUNT}>
                        Create a new account now
                    </Button>
                </span>
            </FormContainer>
        </PageContainer>
    );
};
