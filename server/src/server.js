import 'dotenv/config';
import 'regenerator-runtime/runtime';
import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';

import apiRouter from './routes/api';
import authRouter from './routes/auth';

const app = express();
const port = process.env.PORT_NUMBER;

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

mongoose.set('useFindAndModify', false);
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('DB connection successful'))
    .catch((err) => console.log(`DB connection failed: ${err}`));

const corsOptions = {
    origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use((req, res, next) => {
    res.io = io;
    next();
});

app.use('/api', apiRouter);
app.use('/auth', authRouter);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});