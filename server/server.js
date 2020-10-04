import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import apiRouter from './src/routes/api';
import authRouter from './src/routes/auth';

const app = express();
const port = process.env.PORT_NUMBER;

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

app.use(express.json());

app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
