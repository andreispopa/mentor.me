import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    CheckSquareOutlined,
    TeamOutlined,
    CalendarOutlined,
    LogoutOutlined,
} from '@ant-design/icons';

import { auth } from '../auth';
import { AuthContext } from '../context';
import { ROUTES } from '../constants';
import styled from 'styled-components';

const { Content, Footer, Sider } = Layout;

const User = styled.div`
    color: rgba(255, 255, 255, 0.65);
    padding: 1.2rem;
`;

export const PageLayout = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { pathname } = useLocation();

    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = (collapsed) => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };

    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={handleCollapse}
                >
                    <User style={{ display: collapsed ? 'none' : 'block' }}>
                        <div>Logged in as:</div>
                        <div>{!!user && user.email}</div>
                    </User>
                    <Menu theme="dark" selectedKeys={[pathname]} mode="inline">
                        <Menu.Item
                            key={ROUTES.HOME}
                            icon={<CalendarOutlined />}
                        >
                            <Link to={ROUTES.HOME}>Meetings</Link>
                        </Menu.Item>
                        <Menu.Item
                            key={ROUTES.AVAILABILITY}
                            icon={<CheckSquareOutlined />}
                        >
                            <Link to={ROUTES.AVAILABILITY}>Availability</Link>
                        </Menu.Item>
                        <Menu.Item
                            key={ROUTES.CONTACTS}
                            icon={<TeamOutlined />}
                        >
                            <Link to={ROUTES.CONTACTS}>Contacts</Link>
                        </Menu.Item>
                        <Menu.Item
                            onClick={handleLogout}
                            key="4"
                            icon={<LogoutOutlined />}
                        >
                            Logout
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content>{children}</Content>
                    <Footer style={{ textAlign: 'center' }}>
                        MENTOR.ME © {new Date().getFullYear()}
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
};
