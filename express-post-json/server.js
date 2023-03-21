import express from 'express';

let nextId = 1;

const grades = {};

const app = express();

const jsonParseMiddleware = express.json();

app.use(jsonParseMiddleware);

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201).send(req.body);
});

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const key in grades) {
    gradesArr.push(grades[key]);
  }
  res.json(gradesArr);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
