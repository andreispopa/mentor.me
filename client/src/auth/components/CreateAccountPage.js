import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Result, Alert, Form, Input, Button } from 'antd';

import { auth } from '../auth';
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

export const CreateAccountPage = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [createdSuccessfully, setcreatedSuccessfully] = useState(false);

    const onClicked = async () => {
        try {
            const newUserInfo = {
                firstName,
                lastName,
                email,
                password,
            };

            await auth.createAccount(newUserInfo);
            auth.signOut();
            setcreatedSuccessfully(true);
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    const onFailed = (errorInfo) => {
        setErrorMessage(errorInfo);
    };

    return (
        <div>
            {createdSuccessfully ? (
                <Result
                    title="Account created succesfully."
                    extra={
                        <Link to={ROUTES.SIGN_IN}>
                            <Button type="primary" key="console">
                                Sign In to continue
                            </Button>
                        </Link>
                    }
                />
            ) : (
                <>
                    <h2>Enter the following data to create a new account</h2>
                    <Form
                        {...layout}
                        name="basic"
                        onFinish={onClicked}
                        onFinishFailed={onFailed}
                    >
                        {errorMessage && (
                            <Alert
                                message={errorMessage}
                                type="error"
                                showIcon
                            />
                        )}

                        <Form.Item
                            label="FirstName"
                            name="firstName"
                            onChange={(e) => setFirstName(e.target.value)}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your first name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="LastName"
                            name="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your lastName!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

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
                                Create Account
                            </Button>
                        </Form.Item>
                    </Form>
                </>
            )}
        </div>
    );
};
