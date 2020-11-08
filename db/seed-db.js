const users = [
    {
        _id: 'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
        contacts: [
            'xApfstyhFpTxakKLdluSsQgvjNK2',
            'NfstSlljE4X0QkL4A1Pnjt3vc1K3',
            'Ccn0NCg3uwMGjli3M5Z6CqSE1kB3',
            'n55eQxlp3Rg7nDdp3jjpcPSLk7e2',
            '7wvUMw5tjbc0NE1C3tnB9JrWXkx2',
        ],
        firstName: 'Buddy',
        lastName: 'Jones',
        email: 'test1@gmail.com',
        __v: 0,
    },
    {
        _id: 'xApfstyhFpTxakKLdluSsQgvjNK2',
        contacts: [
            'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
            'gGqRFYLqS0eMdITccd2M4fzAmYl1',
            'DN1ufRvbNrbfNN9fAyk1id4w33j1',
            'Ccn0NCg3uwMGjli3M5Z6CqSE1kB3',
            '7wvUMw5tjbc0NE1C3tnB9JrWXkx2',
        ],
        firstName: 'John',
        lastName: 'Myers',
        email: 'test2@gmail.com',
        __v: 0,
    },
    {
        _id: 'JTiGfOYaAgS0Q9GpaeW6Hl9HIk42',
        contacts: [
            'NfstSlljE4X0QkL4A1Pnjt3vc1K3',
            'DN1ufRvbNrbfNN9fAyk1id4w33j1',
            'Ccn0NCg3uwMGjli3M5Z6CqSE1kB3',
            '7wvUMw5tjbc0NE1C3tnB9JrWXkx2',
        ],
        firstName: 'Bill',
        lastName: 'Moss',
        email: 'test3@gmail.com',
        __v: 0,
    },
    {
        _id: 'gGqRFYLqS0eMdITccd2M4fzAmYl1',
        contacts: [
            'xApfstyhFpTxakKLdluSsQgvjNK2',
            'Ccn0NCg3uwMGjli3M5Z6CqSE1kB3',
            'n55eQxlp3Rg7nDdp3jjpcPSLk7e2',
        ],
        firstName: 'Matt',
        lastName: 'Field',
        email: 'test4@gmail.com',
        __v: 0,
    },
    {
        _id: 'NfstSlljE4X0QkL4A1Pnjt3vc1K3',
        contacts: [
            'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
            'JTiGfOYaAgS0Q9GpaeW6Hl9HIk42',
        ],
        firstName: 'Jane',
        lastName: 'Star',
        email: 'test5@gmail.com',
        __v: 0,
    },
    {
        _id: 'DN1ufRvbNrbfNN9fAyk1id4w33j1',
        contacts: [
            'xApfstyhFpTxakKLdluSsQgvjNK2',
            'JTiGfOYaAgS0Q9GpaeW6Hl9HIk42',
        ],
        firstName: 'Andy',
        lastName: 'Friend',
        email: 'test6@gmail.com',
        __v: 0,
    },
    {
        _id: 'Ccn0NCg3uwMGjli3M5Z6CqSE1kB3',
        contacts: [
            'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
            'JTiGfOYaAgS0Q9GpaeW6Hl9HIk42',
            'xApfstyhFpTxakKLdluSsQgvjNK2',
            'gGqRFYLqS0eMdITccd2M4fzAmYl1',
        ],
        firstName: 'Daniel',
        lastName: 'Moore',
        email: 'test7@gmail.com',
        __v: 0,
    },
    {
        _id: 'n55eQxlp3Rg7nDdp3jjpcPSLk7e2',
        contacts: [
            'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
            'gGqRFYLqS0eMdITccd2M4fzAmYl1',
        ],
        firstName: 'Jacky',
        lastName: 'Daun',
        email: 'test8@gmail.com',
        __v: 0,
    },
    {
        _id: 'vsn2FcVctWW5Dp6xQaDTZTG5Ro23',
        contacts: [],
        firstName: 'James',
        lastName: 'Quincy',
        email: 'test9@gmail.com',
        __v: 0,
    },
    {
        _id: '7wvUMw5tjbc0NE1C3tnB9JrWXkx2',
        contacts: [
            'JTiGfOYaAgS0Q9GpaeW6Hl9HIk42',
            'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
            'xApfstyhFpTxakKLdluSsQgvjNK2',
        ],
        firstName: 'Mark',
        lastName: 'Turner',
        email: 'test10@gmail.com',
        __v: 0,
    },
];

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

const month = currentMonth == 12 ? 1 : currentMonth + 1;
const year = month == 1 ? currentYear + 1 : currentYear;
const days = ['01', '03', '05', '08', '10', '11', '14', '15'];

const dates = [];
days.forEach((day) => {
    dates.push(`${year}-${month}-${day}`);
});

const availabilities = [
    {
        date: new Date(dates[0]),
        userId: 'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
        __v: 0,
        times: ['10:00AM', '1:00PM', '2:00PM', '12:00PM'],
    },
    {
        date: new Date(dates[1]),
        userId: 'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
        __v: 0,
        times: ['3:00PM', '4:00PM', '5:00PM'],
    },
    {
        date: new Date(dates[2]),
        userId: 'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
        __v: 0,
        times: ['1:00PM', '3:00PM', '5:00PM'],
    },
    {
        date: new Date(dates[3]),
        userId: 'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
        __v: 0,
        times: ['9:00AM', '11:00AM', '12:00PM'],
    },
    {
        date: new Date(dates[4]),
        userId: 'mamd0J1jtBP7vfwrOKDmB6f9Gcs1',
        __v: 0,
        times: ['10:00AM', '1:00PM', '12:00PM'],
    },
    {
        date: new Date(dates[0]),
        userId: 'xApfstyhFpTxakKLdluSsQgvjNK2',
        __v: 0,
        times: ['10:00AM', '1:00PM', '12:00PM'],
    },
    {
        date: new Date(dates[3]),
        userId: 'xApfstyhFpTxakKLdluSsQgvjNK2',
        __v: 0,
        times: ['11:00AM', '3:00PM', '12:00PM'],
    },
    {
        date: new Date(dates[4]),
        userId: 'xApfstyhFpTxakKLdluSsQgvjNK2',
        __v: 0,
        times: ['7:00AM', '8:00AM', '9:00AM'],
    },
    {
        date: new Date(dates[5]),
        userId: 'xApfstyhFpTxakKLdluSsQgvjNK2',
        __v: 0,
        times: ['9:00AM', '3:00PM', '4:00PM'],
    },
    {
        date: new Date(dates[6]),
        userId: 'xApfstyhFpTxakKLdluSsQgvjNK2',
        __v: 0,
        times: ['6:00PM', '7:00PM', '8:00PM', '9:00PM'],
    },
    {
        date: new Date(dates[0]),
        userId: 'JTiGfOYaAgS0Q9GpaeW6Hl9HIk42',
        __v: 0,
        times: ['7:00AM', '6:00PM', '7:00PM', '12:00PM'],
    },
    {
        date: new Date(dates[1]),
        userId: 'JTiGfOYaAgS0Q9GpaeW6Hl9HIk42',
        __v: 0,
        times: ['5:00PM'],
    },
    {
        date: new Date(dates[2]),
        userId: 'JTiGfOYaAgS0Q9GpaeW6Hl9HIk42',
        __v: 0,
        times: ['10:00AM', '11:00AM', '12:00PM'],
    },
    {
        date: new Date(dates[4]),
        userId: 'NfstSlljE4X0QkL4A1Pnjt3vc1K3',
        __v: 0,
        times: ['9:00AM', '10:00AM', '11:00AM', '12:00PM'],
    },
    {
        date: new Date(dates[5]),
        userId: 'NfstSlljE4X0QkL4A1Pnjt3vc1K3',
        __v: 0,
        times: ['9:00AM', '10:00AM', '1:00PM', '12:00PM'],
    },
    {
        date: new Date(dates[6]),
        userId: 'NfstSlljE4X0QkL4A1Pnjt3vc1K3',
        __v: 0,
        times: ['10:00AM', '11:00AM', '7:00PM', '9:00PM'],
    },
    {
        date: new Date(dates[7]),
        userId: 'NfstSlljE4X0QkL4A1Pnjt3vc1K3',
        __v: 0,
        times: ['8:00PM', '9:00PM', '10:00PM'],
    },
    {
        date: new Date(dates[0]),
        userId: 'Ccn0NCg3uwMGjli3M5Z6CqSE1kB3',
        __v: 0,
        times: ['8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM'],
    },
    {
        date: new Date(dates[2]),
        userId: 'Ccn0NCg3uwMGjli3M5Z6CqSE1kB3',
        __v: 0,
        times: ['3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM'],
    },
    {
        date: new Date(dates[4]),
        userId: 'Ccn0NCg3uwMGjli3M5Z6CqSE1kB3',
        __v: 0,
        times: ['6:00PM', '7:00PM', '8:00PM', '9:00PM'],
    },
    {
        date: new Date(dates[6]),
        userId: 'Ccn0NCg3uwMGjli3M5Z6CqSE1kB3',
        __v: 0,
        times: ['8:00AM', '7:00PM', '8:00PM', '9:00PM', '10:00PM'],
    },
];

db = db.getSiblingDB('MentorMeDB');
db.users.insertMany(users, { ordered: false });
db.availabilities.insertMany(availabilities, { ordered: false });
