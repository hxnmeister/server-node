import express from 'express';
import postRoutes from './routes/posts.mjs';
import commentRoutes from './routes/comments.mjs';
import authRoutes from './routes/auth.mjs';
import dbConnection from './db/index.mjs';
import cors from 'cors';

dbConnection.on('error', () => console.log('DB connect error!'));
dbConnection.on('connected', () => console.log('DB connected!'));

const app = express();
const port = 8933;

app.use(cors(/*{origin: process.env.CORS_ALLOW}*/));
app.use(express.json());

app.use('', postRoutes);
app.use('', authRoutes);
app.use('', commentRoutes);

app.get('/', (req, res) => 
{
    res.send('<h1>Hello World!</h1>')
});

app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}`)
});