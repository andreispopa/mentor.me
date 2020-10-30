import React, { useState } from 'react';
import { Calendar, Form, Button, Modal, Select } from 'antd';
import moment from 'moment';

import { updateAvailability } from '../helper';
import { DATE_FORMAT, TIMES } from '../../constants';

const { Option } = Select;

export const AddAvailability = ({
    availability,
    onAvailabilityAdded,
    user,
}) => {
    const [form] = Form.useForm();

    const [selectedDate, setSelectedDate] = useState();
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSaveClicked = async () => {
        if (
            selectedDate &&
            (selectedTimes.length > 0 || availability.has(selectedDate))
        ) {
            try {
                await updateAvailability(user.uid, selectedDate, selectedTimes);
                onAvailabilityAdded();
                handleClose();
            } catch (err) {
                console.log(`Save Availability Error: ${err}`);
            }
        }
    };

    const handleDateSelected = (date) => {
        form.resetFields(['time']);
        setSelectedTimes([]);
        if (date) {
            const formattedDate = date.format(DATE_FORMAT);
            setSelectedDate(formattedDate);
            if (availability && availability.has(formattedDate)) {
                setSelectedTimes(availability.get(formattedDate));
            }
            setModalVisible(true);
        } else {
            setSelectedDate(null);
        }
    };

    const handleDisabledDates = (currentDate) => {
        return (
            currentDate && currentDate.valueOf() <= moment().subtract(1, 'day')
        );
    };

    const handleDateCellRender = (dateObject) => {
        const date = dateObject.format(DATE_FORMAT);
        const hasAvailableTimes = availability.has(date);

        return hasAvailableTimes ? (
            <ul className="times">
                {availability.get(date).map((time) => (
                    <li key={time}>{time}</li>
                ))}
            </ul>
        ) : null;
    };

    const handleClose = () => {
        form.resetFields();
        setSelectedDate(null);
        setSelectedTimes([]);
        setModalVisible(false);
    };

    return (
        <>
            <Calendar
                onSelect={handleDateSelected}
                dateCellRender={handleDateCellRender}
                disabledDate={handleDisabledDates}
            />
            <Modal
                visible={modalVisible}
                title={`Change Availability ${
                    selectedDate ? `for ${selectedDate}` : ''
                }`}
                onCancel={handleClose}
                footer={[
                    <Button key="back" onClick={handleClose}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={handleSaveClicked}
                    >
                        Save
                    </Button>,
                ]}
            >
                <Form form={form}>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        value={selectedTimes}
                        onChange={(newValue) => {
                            setSelectedTimes(newValue);
                        }}
                        disabled={!selectedDate}
                        placeholder="Select available times"
                    >
                        {TIMES.map((time) => {
                            return (
                                <Option key={time} value={time}>
                                    {time}
                                </Option>
                            );
                        })}
                    </Select>
                </Form>
            </Modal>
        </>
    );
};
