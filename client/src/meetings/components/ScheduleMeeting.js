import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Drawer, Form, Button, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import socketIOClient from 'socket.io-client';

import {
    getAvailabilityDateToTimesMap,
    updateAvailability,
} from '../../availability';
import { AuthContext } from '../../context';
import { useContacts } from '../../contacts';
import { DATE_FORMAT } from '../../constants';

const { Option } = Select;
const { TextArea } = Input;

export const ScheduleMeeting = ({ onMeetingScheduled }) => {
    const { user } = useContext(AuthContext);
    const contacts = useContacts(user);
    const [form] = Form.useForm();

    const [message, setMessage] = useState('');
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [availableDates, setAvailableDates] = useState({});
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const socket = socketIOClient('http://127.0.0.1:3007');
        socket.on('newAvailability', (data) => {
            const { userId, times, date } = data.availability;
            if (selectedUserId === userId) {
                const newDates = new Map(availableDates);
                const dateString = moment.utc(date).format(DATE_FORMAT);

                newDates.set(dateString, times);
                if (dateString === selectedDate) {
                    setAvailableTimes(times);
                }
                setAvailableDates(newDates);
            }
        });
        socket.on('deletedAvailability', (data) => {
            const { userId, date } = data.deletedAvailability;
            if (selectedUserId === userId) {
                const newDates = new Map(availableDates);
                const dateString = moment.utc(date).format(DATE_FORMAT);
                if (dateString === selectedDate) {
                    setMessage(
                        'Oops... You missed it. Someone else scheduled the available times for that day.'
                    );
                    form.resetFields(['date']);
                }
                newDates.delete(dateString);
                setAvailableDates(newDates);
            }
        });
        return () => socket.disconnect();
    }, [selectedUserId, availableDates, form, selectedDate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dates = await getAvailabilityDateToTimesMap(
                    selectedUserId
                );
                setAvailableDates(dates);
            } catch (err) {
                console.log(`Get Availability Error: ${err}`);
            }
        };
        if (!!selectedUserId) {
            fetchData();
        }
    }, [selectedUserId]);

    const handleDisabledDates = (currentDate) => {
        return (
            currentDate && !availableDates.has(currentDate.format(DATE_FORMAT))
        );
    };

    const onDateSelected = (date) => {
        setMessage('');
        const formattedDate = date.format(DATE_FORMAT);
        setSelectedDate(formattedDate);
        setAvailableTimes(availableDates.get(formattedDate));
    };

    const onScheduleClicked = async () => {
        const newMeeting = {
            participant1: user.uid,
            participant2: selectedUserId,
            date: selectedDate,
            time: selectedTime,
            notes: notes,
        };

        const remainingTimes = availableDates
            .get(selectedDate)
            .filter((time) => time !== selectedTime);

        try {
            await axios.post(
                process.env.REACT_APP_MEETINGS,
                JSON.stringify(newMeeting),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            await updateAvailability(
                selectedUserId,
                selectedDate,
                remainingTimes
            );
            onMeetingScheduled();
            onClose();
        } catch (err) {
            console.log(`Create Meeting Error: ${err}`);
        }
    };

    const onSelectedUserChanged = (id) => {
        setSelectedUserId(id);
        form.resetFields(['date', 'time']);
        setSelectedDate(null);
        setSelectedTime(null);
        setMessage('');
    };

    const onClose = () => {
        form.resetFields();
        setSelectedUserId(null);
        setSelectedDate(null);
        setSelectedTime(null);
        setDrawerVisible(false);
        setMessage('');
    };

    return (
        <>
            <Button type="primary" onClick={() => setDrawerVisible(true)}>
                <PlusOutlined /> New meeting
            </Button>
            <Drawer
                title="Schedule a new meeting"
                width={720}
                onClose={onClose}
                visible={drawerVisible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={onScheduleClicked} type="primary">
                            Schedule
                        </Button>
                    </div>
                }
            >
                <Form form={form}>
                    <Form.Item
                        name="other-party"
                        label="With"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Please select the person you want to meet with',
                            },
                        ]}
                    >
                        <Select
                            onChange={onSelectedUserChanged}
                            placeholder="Select person to meet with"
                        >
                            {contacts.map((contact) => {
                                return (
                                    <Option
                                        key={contact._id}
                                        value={contact._id}
                                    >
                                        {contact.firstName} {contact.lastName}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>

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
                            disabled={!selectedUserId}
                            onChange={onDateSelected}
                        />
                    </Form.Item>

                    <Form.Item
                        name="time"
                        label="Time"
                        rules={[
                            {
                                required: true,
                                message: 'Please select the time',
                            },
                        ]}
                    >
                        <Select
                            onChange={(time) => setSelectedTime(time)}
                            disabled={!selectedDate}
                            placeholder="Select time"
                        >
                            {availableTimes.map((time) => {
                                return (
                                    <Option key={time} value={time}>
                                        {time}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item name="notes" label="Notes">
                        <TextArea
                            rows={4}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Add a note"
                        />
                    </Form.Item>
                </Form>
                {message && <div>Feedback: {message}</div>}
            </Drawer>
        </>
    );
};
