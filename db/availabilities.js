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
