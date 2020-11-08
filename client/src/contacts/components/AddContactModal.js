import React, { useState } from 'react';
import { Input, Modal, Button } from 'antd';

import { createRequest } from '../helper';

export const AddContactModal = ({ user, onContactAdded }) => {
    const [newContactEmail, setNewContactEmail] = useState();
    const [modalVisible, setModalVisible] = useState();
    const [modalLoading, setModalLoading] = useState();

    const onNewContactClicked = () => {
        setModalVisible(true);
    };

    // TODO: validate email field
    const handleModalAddContactClicked = async () => {
        setModalLoading(true);
        try {
            await createRequest(user.email, newContactEmail);
            onContactAdded();
            setNewContactEmail('');
            setModalLoading(false);
            setModalVisible(false);
        } catch (err) {
            console.log(`Create New Contact Error: ${err}`);
        }
    };

    const handleModalCancelClicked = () => {
        setNewContactEmail('');
        setModalVisible(false);
        setModalLoading(false);
    };

    return (
        <>
            <Button type="primary" onClick={onNewContactClicked}>
                New Contact
            </Button>
            <Modal
                visible={modalVisible}
                title="Add Contact"
                onOk={handleModalAddContactClicked}
                onCancel={handleModalCancelClicked}
                footer={[
                    <Button key="back" onClick={handleModalCancelClicked}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        loading={modalLoading}
                        onClick={handleModalAddContactClicked}
                    >
                        Add Contact
                    </Button>,
                ]}
            >
                <Input
                    placeholder="Email Address"
                    onChange={(e) => setNewContactEmail(e.target.value)}
                />
            </Modal>
        </>
    );
};
