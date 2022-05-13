import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

const PORT = 5000;

app.get('/main', (req, res) => {
  if (req.query.page === '1') {
    res.send(JSON.stringify(DataBase1));
  } else if (req.query.page === '2') {
    res.send(JSON.stringify(DataBase2));
  }
});

app.post('/login', (req, res) => {
  // 로그인 데이터 인증 로직;
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`);
});
