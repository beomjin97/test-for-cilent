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

const DataBase = {
  postId: 1001,
  title: 'first post',
  author: '김범진',
  content:
    '대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다. 행정각부의 장은 국무위원 중에서 국무총리의 제청으로 대통령이 임명한다. 국회는 헌법 또는 법률에 특별한 규정이 없는 한 재적의원 과반수의 출석과 출석의원 과반수의 찬성으로 의결한다. 가부동수인 때에는 부결된 것으로 본다.',
  imgUrl: [
    'https://cdn.lolchess.gg/upload/images/champions/Galio_1634784242.png',
    'https://ddragon.poro.gg/12.3.1/img/champion/Gangplank.png',
    'https://cdn.lolchess.gg/upload/images/champions/Gnar_1643374869.png',
    'https://cdn.lolchess.gg/upload/images/champions/Nocturne_1643374939.png',
    'https://cdn.lolchess.gg/upload/images/champions/Darius_1634784329.png',
  ],
  like: 4,
  comment: [
    { author: '김범진', content: '공정하다는 착각' },
    { author: '이혜영', content: '정의란 무엇인가' },
    { author: '한재민', content: '돈 뜨겁게 사랑하고 차갑게 다루어라' },
    { author: '김범진', content: '열정없이 사느니 죽는게 낫다' },
    { author: '이혜영', content: '어른은 속으로 운다.' },
  ],
};

app.get('/main', (req, res) => {
  res.send(JSON.stringify(DataBase));
});

app.post('/login', (req, res) => {
  // 로그인 데이터 인증 로직;
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`);
});
