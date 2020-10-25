import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Result, Alert, Form, Input, Button } from 'antd';
import styled from 'styled-components';

import { PageContainer } from '../../ui';
import { auth } from '../auth';
import { ROUTES } from '../../constants';

const LoginContainer = styled(Col)`
    background-color: Gainsboro;
    padding: 10px 20px;
`;

export const CreateAccountPage = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [createdSuccessfully, setcreatedSuccessfully] = useState(false);

    const handleFinish = async () => {
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

    const handleFinishFailed = (errorInfo) => {
        setErrorMessage(errorInfo);
    };

    return (
        <PageContainer justify="center" align="middle">
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
                <LoginContainer xs={22} sm={22} md={10} lg={8}>
                    <h2>CREATE A NEW ACCOUNT</h2>
                    <Form
                        name="basic"
                        onFinish={handleFinish}
                        onFinishFailed={handleFinishFailed}
                    >
                        {errorMessage && (
                            <Alert
                                message={errorMessage}
                                type="error"
                                showIcon
                            />
                        )}
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    name="firstName"
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your first name!',
                                        },
                                    ]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="first name"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="lastName"
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your lastName!',
                                        },
                                    ]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="last name"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
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
                            <Input size="large" placeholder="your email" />
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
                                placeholder="password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                CREATE ACCOUNT
                            </Button>
                        </Form.Item>
                    </Form>
                </LoginContainer>
            )}
        </PageContainer>
    );
};
