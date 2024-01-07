import express from 'express';
import postRoutes from './routes/posts.mjs';
import dbConnection from './db/index.mjs';

dbConnection.on('error', () => console.log('DB connect error!'));
dbConnection.on('connected', () => console.log('DB connected!'));

const app = express();
const port = 8933;

app.use('', postRoutes);

app.get('/', (req, res) => 
{
    res.send('<h1>Hello World!</h1>')
});

app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}`)
});