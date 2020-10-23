import React, { useState, useContext } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { Alert, Form, Input, Button } from 'antd';

import { auth } from '../auth';
import { AuthContext } from '../../context';
import { ROUTES } from '../../constants';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export const SignInPage = () => {
    const { user } = useContext(AuthContext);
    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const onSignInClicked = async () => {
        // TODO: Handle case when email or password field is empty.
        try {
            await auth.signIn(email, password);
            history.push(ROUTES.HOME);
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    const onSignInFailed = (errorInfo) => {
        setErrorMessage(errorInfo);
    };

    if (!!user) {
        return <Redirect to={ROUTES.HOME} />;
    }

    return (
        <div>
            <h2>Welcome!</h2>
            <Form
                {...layout}
                name="basic"
                onFinish={onSignInClicked}
                onFinishFailed={onSignInFailed}
            >
                {errorMessage && (
                    <Alert message={errorMessage} type="error" showIcon />
                )}
                <Form.Item
                    label="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
            <Link to={ROUTES.CREATE_ACCOUNT}>
                <Button type="primary">Create A New Account</Button>
            </Link>
        </div>
    );
};
