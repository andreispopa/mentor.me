import React, { useState } from 'react';
import { Drawer, Form, Button, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
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
    const [drawerVisible, setDrawerVisible] = useState(false);

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
            console.log(date);
            setSelectedDate(formattedDate);
            if (availability && availability.has(formattedDate)) {
                setSelectedTimes(availability.get(formattedDate));
            }
        } else {
            setSelectedDate(null);
        }
    };

    const handleDisabledDates = (currentDate) => {
        return (
            currentDate && currentDate.valueOf() <= moment().subtract(1, 'day')
        );
    };

    const handleClose = () => {
        form.resetFields();
        setSelectedDate(null);
        setSelectedTimes([]);
        setDrawerVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={() => setDrawerVisible(true)}>
                <PlusOutlined /> Add availability
            </Button>
            <Drawer
                title="Add availability"
                width={720}
                handleClose={handleClose}
                visible={drawerVisible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button
                            onClick={handleClose}
                            style={{ marginRight: 8 }}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleSaveClicked} type="primary">
                            Save
                        </Button>
                    </div>
                }
            >
                <Form form={form}>
                    <Form.Item
                        name="date"
                        label="Date"
                        rules={[
                            {
                                required: true,
                                message: 'Please select a date',
                            },
                        ]}
                    >
                        <DatePicker
                            disabledDate={handleDisabledDates}
                            onChange={handleDateSelected}
                        />
                    </Form.Item>

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
            </Drawer>
        </>
    );
};
