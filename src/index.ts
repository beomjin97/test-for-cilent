import express, { Application } from 'express';
import cors from 'cors';
import { DataBase1, DataBase2, detailPost } from './data';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const app: Application = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(session({ secret: 'my secret', resave: false, saveUninitialized: false }));
app.use(cookieParser());
const PORT = 5000;

app.get('/main', (req, res) => {
  if (req.query.page === '1') {
    res.send(JSON.stringify(DataBase1));
  } else if (req.query.page === '2') {
    res.send(JSON.stringify(DataBase2));
  }
});

app.post('/login', (req, res) => {
  const { userId, password } = req.body;
  //@ts-ignore
  req.session.isLoggedIn = true;
  req.session.save(() => {
    res.json({
      statusText: 'OK',
      data: userId,
    });
  });
});

app.get('/post/:postId', (req, res) => {
  const id = req.params.postId;
  res.send(JSON.stringify(DataBase1[parseInt(id[1]) - 1]));
});

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`);
});

// title만 출력
